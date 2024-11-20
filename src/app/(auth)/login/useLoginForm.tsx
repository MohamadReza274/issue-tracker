import {z} from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const LoginFormSchema = z.object({
    email: z.string().email("Incorrect email, please enter a valid email address."),
    password: z.string().min(6,"Password must be at least 6 character(s)."),
})

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;


const useLoginForm = () => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm<LoginFormSchemaType>({resolver: zodResolver(LoginFormSchema)});

    return {register,handleSubmit,reset,errors}
}

export  default useLoginForm;