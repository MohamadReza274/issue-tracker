import React from "react";


type Status = "OPEN" | "IN_PROGRESS" | "CLOSED";

const statusMap: Record<Status, { label: string, color: string }> = {
    OPEN: {label: "Open", color: "bg-red-100 text-red-700 dark:ring-red-700"},
    IN_PROGRESS: {label: "In Progress", color: "bg-yellow-100 text-yellow-700 dark:ring-yellow-700"},
    CLOSED: {label: "Closed", color: " bg-green-100 text-green-700 dark:ring-green-700"},
}


const IssueStatusBadge = ({status}: { status: Status }) => {
    return <span
        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium dark:ring-1 dark:ring-inset dark:bg-transparent ${statusMap[status].color}`}>{statusMap[status].label}</span>
}

export default IssueStatusBadge;