import React from "react";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "@/app/issues/_Components/IssueFormSkeleton";

const IssueForm = dynamic(
    () => import("@/app/issues/_Components/IssueForm"),
    {ssr: false, loading: () => <IssueFormSkeleton/>}
);


const NewIssuePage = async () => {

    return (
        <IssueForm/>
    );
};

export default NewIssuePage;
