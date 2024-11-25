import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db";
import {PatchIssueSchema} from "@/app/api/issues/schema";
import {auth} from "@/app/auth";

interface Props {
    params: { id: string };
}

// get issue by id
export const GET = async (request: NextRequest, {params}: Props) => {
    const {id} = await params;

    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(id, 10)},
    });

    if (!issue) {
        return NextResponse.json(
            {error: `Issue with id: ${id} not found `},
            {status: 404}
        );
    }

    return NextResponse.json(issue, {status: 200});
};

// update issue
export const PATCH = async (request: NextRequest, {params}: Props) => {
    const {id} = await params;
    const {title, description, status, assignedToUserId} = await request.json();

    const session = await auth();
    if (!session) {
        return NextResponse.json({error: "Unauthorized user"}, {status: 301});
    }

    const validation = PatchIssueSchema.safeParse({
        title,
        description,
        status,
        assignedToUserId,
    });

    if (assignedToUserId) {
        const user = await prisma.user.findUnique({
            where: {id: assignedToUserId},
        });
        if (!user) {
            return NextResponse.json({error: "Invalid User."});
        }
    }

    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(id, 10)},
    });

    if (!validation.success) {
        return NextResponse.json(
            {error: validation.error.errors},
            {status: 404}
        );
    }

    if (!issue) {
        return NextResponse.json({error: `Issue with id: ${id} not found`});
    }

    const updatedIssue = await prisma.issue.update({
        where: {id: parseInt(id, 10)},
        data: {...validation.data},
    });

    return NextResponse.json(updatedIssue, {status: 201});
};

// delete issue
export const DELETE = async (request: NextRequest, {params}: Props) => {
    const {id} = await params;

    const session = await auth();
    if (!session) {
        return NextResponse.json({error: "Unauthorized user"}, {status: 401});
    }

    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(id, 10)},
    });

    if (!issue) {
        return NextResponse.json(
            {error: `Issue with id: ${id} not found`},
            {status: 404}
        );
    }

    const deletedIssue = await prisma.issue.delete({
        where: {id: parseInt(id, 10)},
    });

    return NextResponse.json(deletedIssue, {status: 200});
};
