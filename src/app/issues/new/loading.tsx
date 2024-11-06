import React from 'react';
import Skeleton from "@/app/Components/Skeleton";

const LoadingNewIssuePage = () => {
    return (
        <div className="max-w-xl flex flex-col gap-y-4">
            <Skeleton className=" mt-8"/>

            <div className="mb-4 my-4">
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

            <Skeleton width="w-32"/>
        </div>
    );
};

export default LoadingNewIssuePage;