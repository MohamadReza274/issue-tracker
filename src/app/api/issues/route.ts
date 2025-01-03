import { auth } from "@/app/auth";
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const issues = await prisma.issue.findMany();

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
