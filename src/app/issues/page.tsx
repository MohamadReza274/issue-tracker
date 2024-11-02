import React from 'react';
import Link from "next/link";

const IssuesPage = () => {
    return (
        <div>
            <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
                <Link href="/issues/new">New Issue</Link>
            </button>
        </div>
    );
};

export default IssuesPage;