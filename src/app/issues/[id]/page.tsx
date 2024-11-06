import React from 'react';
import prisma from "@/lib/db";
import {notFound} from "next/navigation";
import {Issue} from "@prisma/client";
import IssueStatusBadge from "@/app/Components/IssueStatusBadge";
import {Status} from "@/lib/types";
import ReactMarkdown from "react-markdown";

interface Props {
    params: { id: string };
}

const IssueDetailsPage = async ({params}: Props) => {
    const id = parseInt(params.id, 10);

    if (!id) {
        notFound();
    }
    const issue = await prisma.issue.findUnique({where: {id}}) as Issue;


    if (!issue) {
        notFound();
    }

    return (
        <div className="flex flex-col gap-y-4">
            <h2 className="text-3xl">{issue?.title.charAt(0).toUpperCase() + issue?.title.slice(1)}</h2>
            <div className="flex items-center gap-x-2">
                <IssueStatusBadge status={issue.status as Status}/>
                <p>{issue.createdAt.toLocaleDateString()}</p>
            </div>
            <div className="rounded-md shadow px-4 py-8 prose dark:prose-invert">
                <ReactMarkdown>
                    {issue?.description}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default IssueDetailsPage;