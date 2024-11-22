import {z} from 'zod';


 const IssueSchema = z.object({
    title: z.string().min(3,"Title must contain at least 3 character(s)"),
    description:z.string().min(15,"Description must contain at least 15 character(s)").max(500),
    status:z.enum(["OPEN","IN_PROGRESS","CLOSED"]).optional()
})

export const PatchIssueSchema = z.object({
    title: z.string().min(3,"Title must contain at least 3 character(s)").optional(),
    description:z.string().min(15,"Description must contain at least 15 character(s)").max(5000).optional(),
    status:z.enum(["OPEN","IN_PROGRESS","CLOSED"]).optional(),
    assignedToUserId:z.string().min(2,"assignedToUserId is requred.").max(255).optional().nullable(),
})

export default IssueSchema