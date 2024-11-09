import {z} from 'zod';


 const IssueSchema = z.object({
    title: z.string().min(3,"Title must contain at least 3 character(s)"),
    description:z.string().min(15,"Description must contain at least 15 character(s)").max(500),
    status:z.enum(["OPEN","IN_PROGRESS","CLOSED"]).optional()
})

export default IssueSchema