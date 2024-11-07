import React from 'react';
import {IssueStatusBadge} from "@/app/Components";
import {Status} from "@/lib/types";
import ReactMarkdown from "react-markdown";
import {Issue} from "@prisma/client";

const IssueDetails = ({issue}: { issue: Issue }) => {
    return (
        <>
            <h2 className="text-3xl capitalize">{issue?.title}</h2>
            <div className="flex items-center gap-x-2">
                <IssueStatusBadge status={issue.status as Status}/>
                <p>{issue.createdAt.toLocaleDateString()}</p>
            </div>
            <div className="rounded-md shadow px-4 py-8 prose dark:prose-invert">
                <ReactMarkdown>
                    {issue?.description}
                </ReactMarkdown>
            </div>
        </>
    )
        ;
};

export default IssueDetails;