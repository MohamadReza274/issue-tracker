import { auth } from "@/app/auth";
import prisma from "@/lib/db";
import { Issue } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  searchParams: { sortOrder: string; status: string };
}

export const GET = async ({ searchParams }: Props) => {
  let issues: Issue[] = [];
  console.log(searchParams?.sortOrder);
  if (searchParams?.sortOrder) {
    const { sortOrder } = searchParams;
    issues = await prisma.issue.findMany({
      orderBy: { [sortOrder]: "asc" },
    });
  }
  if (searchParams?.status) {
    const { status } = searchParams;
    issues = await prisma.issue.findMany({
      where: { status: status },
    });
  }

  issues = await prisma.issue.findMany();

  if (!issues) {
    return NextResponse.json({ error: "there is no issues" }, { status: 404 });
  }

  return NextResponse.json(issues);
};

export const POST = async (request: NextRequest) => {
  const { title, description, status } = await request.json();

  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized user" }, { status: 401 });
  }

  const addedIssue = await prisma.issue.create({
    data: { title, description, status },
  });

  return NextResponse.json(addedIssue, { status: 201 });
};
