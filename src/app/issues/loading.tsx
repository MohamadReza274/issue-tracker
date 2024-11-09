import React from 'react';
import Link from "next/link";
import {Skeleton} from "@/app/Components";
import {tableHeaders} from "@/app/issues/IssuesTable";

const issueSkeleton = Array.from({length: 6}).map((_, i) => i);

const IssueLoadingPage = () => {
    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8 dark:text-white dark:bg-gray-800 rounded-lg p-4">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Issues</h1>
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                            A list of all the issues in your system including their title, description, status and
                            createdAt.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <Link
                            href={"/issues/new"}
                            className="block dark:text-white rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add Issue
                        </Link>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="min-w-full divide-y divide-gray-300">
                                <div className="grid grid-cols-3 gap-x-6 mb-2">
                                    {tableHeaders.map(h => (<Skeleton key={h.id} rounded={"sm"} className={""}/>))}
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {issueSkeleton?.map((s) => (
                                        <div key={s} className={"overflow-hidden"}>
                                            <Skeleton rounded={"sm"} className={"w-full my-2"}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueLoadingPage;