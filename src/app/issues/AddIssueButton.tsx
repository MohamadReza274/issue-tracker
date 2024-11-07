import React from 'react';
import Link from "next/link";

const AddIssueButton = () => {
    return (
        <Link
            href={"/issues/new"}
            className="block dark:text-white rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Add Issue
        </Link>
    );
};

export default AddIssueButton;