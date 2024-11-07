import React from 'react';
import {Skeleton} from "@/app/Components";

const LoadingIssueDetailsPage = () => {
    return (
        <div className="flex flex-col gap-y-4 mt-8 max-w-lg">
            <Skeleton/>
            <div className="flex items-center gap-x-2">
                <Skeleton width="w-24"/>
                <Skeleton width="w-24"/>
            </div>
            <div className="rounded-md shadow px-4 py-8 w-full">
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