import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db";
import IssueSchema from "@/app/api/issues/schema";

interface Props {
    params: { id: string }
}

export const GET = async (request: NextRequest, {params}: Props) => {
    const {id} = await params;

    const issue = await prisma.issue.findUnique({where: {id: parseInt(id, 10)}});

    if (!issue) {
        return NextResponse.json({error: `Issue with id: ${id} not found `}, {status: 404});
    }

    return NextResponse.json(issue, {status: 200});
}

export const PUT = async (request: NextRequest, {params}: Props) => {
    const {id} = await params;
    const {title, description, status} = await request.json();

    const issue = await prisma.issue.findUnique({where: {id: parseInt(id, 10)}});

    const validation = IssueSchema.safeParse({title, description, status});

    if (!validation.success) {
        return NextResponse.json({error: validation.error.errors}, {status: 404});
    }

    if (!issue) {
        return NextResponse.json({error: `Issue with id: ${id} not found`});
    }

    const updatedIssue = await prisma.issue.update({where: {id: parseInt(id, 10)}, data: {...validation.data}});

    return NextResponse.json(updatedIssue, {status: 201});
}

export const DELETE = async (request: NextRequest, {params}: Props) => {
    const {id} = await params;

    const issue = await prisma.issue.findUnique({where: {id: parseInt(id, 10)}});
    if (!issue) {
        return NextResponse.json({error: `Issue with id: ${id} not found`}, {status: 404});
    }

    const deletedIssue = await prisma.issue.delete({where: {id: parseInt(id, 10)}});

    return NextResponse.json(deletedIssue, {status: 200});


}