import prisma from "@/lib/db";
import {Issue} from "@/lib/types";

export const tableHeaders: { id: number, label: string, sortOrder: string }[] = [
    {id: 1, label: "Title", sortOrder: "title"},
    {id: 2, label: "Status", sortOrder: "status"},
    {id: 3, label: "CreatedAt", sortOrder: "createdAt"},
]


export const getIssues = async (sortOrder?: string) => {
    "use server"
    const issues = await prisma.issue.findMany({orderBy: sortOrder ? {[sortOrder]: "asc"} : undefined}) as Issue[];
    return {issues}
}