import React from 'react';
import Link from "next/link";
import {EditIcon} from "@/lib/icons";

const EditIssueButton = ({issueId}: { issueId: number }) => {
    return (
        <Link href={`/issues/${issueId}/edit`}
              className="flex gap-x-2 items-center border border-indigo-400 rounded-md px-4 py-1 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-500 ">
            <EditIcon className="w-4 h-4"/>
            Edit
        </Link>
    );
};

export default EditIssueButton;