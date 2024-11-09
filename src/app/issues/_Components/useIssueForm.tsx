"use client"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import IssueSchema from "@/app/api/issues/schema";
import {z} from 'zod'


export type IssueFormData = z.infer<typeof IssueSchema>;

const useIssueForm = () => {
    const {
        handleSubmit,
        register,
        reset,
        control,
        formState: {errors},
    } = useForm<IssueFormData>({resolver: zodResolver(IssueSchema)});
    return {handleSubmit, errors, control, reset, register};
}


export default useIssueForm;