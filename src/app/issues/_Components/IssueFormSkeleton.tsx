import React from 'react';
import {Skeleton} from "@/app/Components";

const IssueFormSkeleton = () => {
    return (
        <div className="flex flex-col gap-y-4 mt-8 max-w-2xl">
            <Skeleton rounded={"sm"}/>
            <div className=" mt-4 w-full rounded overflow-hidden">
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
            </div>
            <Skeleton rounded={"sm"} className="mt-4" width="w-32"/>
        </div>
    );
};

export default IssueFormSkeleton;