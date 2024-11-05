import React from 'react';
import prisma from "@/lib/db";
import {notFound} from "next/navigation";
import {Issue} from "@prisma/client";

interface Props {
    params: { id: string };
}

const IssueDetailsPage = async ({params}: Props) => {
    const id = parseInt(params.id,10);

    if(!id) {
        notFound();
    }
    const issue = await prisma.issue.findUnique({where: {id}}) as Issue;


    if (!issue) {
        notFound();
    }

    return (
        <div>
            <h2>{issue?.title}</h2>
            <p>{issue?.description}</p>
        </div>
    );
};

export default IssueDetailsPage;