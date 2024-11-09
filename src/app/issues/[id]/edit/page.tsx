import React from 'react';
import {notFound} from "next/navigation";
import prisma from "@/lib/db";
import {Issue} from "@prisma/client";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "@/app/issues/_Components/IssueFormSkeleton";


const IssueForm = dynamic(
    () => import("@/app/issues/_Components/IssueForm"),
    {ssr: false, loading: () => <IssueFormSkeleton/>}
);

const EditIssuePage = async ({params}: { params: { id: string } }) => {

    const id = parseInt(params.id, 10);
    if (!id) {
        notFound();
    }

    const issue = await prisma.issue.findUnique({where: {id}}) as Issue;
    return (
        <IssueForm issue={issue}/>
    );
};

export default EditIssuePage;