import React from 'react';
import IssueForm from "@/app/issues/_Components/IssueForm";
import {notFound} from "next/navigation";
import prisma from "@/lib/db";
import {Issue} from "@prisma/client";

const EditIssuePage = async ({params}:{params:{id:string}}) => {

    const id = parseInt(params.id, 10);
    if (!id) {
        notFound();
    }

    const issue = await prisma.issue.findUnique({where:{id}}) as Issue;
    return (
        <IssueForm issue={issue}/>
    );
};

export default EditIssuePage;