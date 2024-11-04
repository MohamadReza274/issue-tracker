import React from "react";


type Status = "OPEN" | "IN_PROGRESS" | "CLOSED";

const statusMap: Record<Status, { label: string, color: string }> = {
    OPEN: {label: "Open", color: "bg-green-50 text-green-700 ring-green-700/10"},
    IN_PROGRESS: {label: "In Progress", color: "bg-yellow-50 text-yellow-700 ring-yellow-700/10"},
    CLOSED: {label: "Closed", color: "bg-red-50 text-red-700 ring-red-700/10"},
}


const IssueStatusBadge = ({status}: { status: Status }) => {
    return <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset dark:bg-transparent ${statusMap[status].color}`}>{statusMap[status].label}</span>
}

export default IssueStatusBadge;