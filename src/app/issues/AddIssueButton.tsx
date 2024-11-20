import React from 'react';
import Link from "next/link";

const AddIssueButton = () => {
    return (
        <Link
            href={"/issues/new"}
            className="btn-primary"
        >
            Add Issue
        </Link>
    );
};

export default AddIssueButton;