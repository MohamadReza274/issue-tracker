import React from 'react';
import {Skeleton} from "@/app/Components";

const LoadingIssueDetailsPage = () => {
    return (
        <div className="flex flex-col gap-y-4 mt-8 max-w-lg">
            <Skeleton rounded={"sm"}/>
            <div className="flex items-center gap-x-2">
                <Skeleton rounded={'sm'} width="w-24"/>
                <Skeleton rounded={"sm"} width="w-24"/>
            </div>
            <div className="rounded-md shadow px-4 py-8 w-full overflow-hidden">
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
            </div>
        </div>
    );
};

export default LoadingIssueDetailsPage;