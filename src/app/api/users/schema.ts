import {z} from 'zod'

const UserSchema = z.object({
    email: z.string().email("invalid email address, please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

export type UserSchemaType = z.infer<typeof UserSchema>;

export default UserSchema;