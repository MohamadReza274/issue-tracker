import React from 'react';
import Link from "next/link";
import IssueStatusBadge from "@/app/Components/IssueStatusBadge";
import {tableHeaders} from "@/app/issues/IssueTableData";
import prisma from "@/lib/db";
import {Issue} from "@/lib/types";


interface Props {
    searchParams: { sortOrder: string }
}

const IssuesPage = async ({searchParams}: Props) => {
    const {sortOrder} = searchParams;
    const issues = await prisma.issue.findMany({orderBy: sortOrder ? {[sortOrder]: "asc"} : undefined}) as Issue[];

    if (issues.length === 0) {
        return <div className={"p-8 text-gray-300"}>
            <h2 className={"text-2xl"}>There is no issue</h2>
        </div>
    }
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
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                <tr>
                                    {tableHeaders?.map(header => (<th key={header.id} scope="col"
                                                                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 dark:text-white">
                                        <Link href={`/issues?sortOrder=${header.sortOrder}`}>{header.label}</Link>
                                    </th>))}
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {issues?.map((issue) => (
                                    <tr key={issue.id}>
                                        <td className="whitespace-nowrap py-4 pl-1 text-sm font-medium text-gray-900 dark:text-white">
                                            <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                                        </td>
                                        <td className="whitespace-nowrap pl-1 py-4 text-sm text-gray-500 dark:text-gray-300">{issue.description.slice(0, 15)}...</td>
                                        <td className="whitespace-nowrap pl-1 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            <IssueStatusBadge status={issue.status}/>
                                        </td>
                                        <td className="whitespace-nowrap pl-1 py-4 text-sm text-gray-500 dark:text-gray-300">{issue.createdAt.toLocaleDateString()}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a href="#"
                                               className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 ">
                                                Edit<span className="sr-only">, {issue.title}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssuesPage;