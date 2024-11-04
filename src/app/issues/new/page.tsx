"use client";

import React, {useState} from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import useIssueForm, {FormFieldsType} from "@/app/issues/new/useIssueForm";
import {Controller, SubmitHandler} from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {XCircleIcon} from "@/lib/icons";
import ErrorMessage from "@/app/Components/ErrorMessage";
import Spinner from "@/app/Components/Spinner";
import {Options} from "easymde";

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
};

const options: Options = {
    toolbar: [
        "bold",
        "italic",
        "heading",
        "|",
        "unordered-list",
        "ordered-list",
        "undo"
    ],
    // toolbarTips:true
}


const NewIssuePage = () => {
    const {control, handleSubmit, register, reset, errors, isSubmitting} =
        useIssueForm();
    const router = useRouter();
    const [error, setError] = useState("");

    const handleSubmitForm: SubmitHandler<FormFieldsType> = async (values) => {
        try {
            await axios.post("http://localhost:3000/api/issues", {...values});
            setError("");
            toast.success("Issue successfully added");
            reset();
            router.push("/issues");
        } catch (error) {
            console.log(
                error instanceof Error ? error.message : "Failed to add issue"
            );
            setError(error instanceof Error ? error.message : "Failed to add issue");
        }
    };

    return (
        <div className="max-w-xl">
            {error && (
                <div className="border-l-4 border-yellow-400 bg-red-50 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <XCircleIcon
                                aria-hidden="true"
                                className="h-5 w-5 text-red-400"
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-red-700">{error}</p>
                        </div>
                    </div>
                </div>
            )}

            <form className="space-y-2" onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="mb-8">
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 dark:text-white"
                    >
                        Title
                    </label>
                    <div className="relative mt-2 sm:col-span-2 sm:mt-0 rounded-md">
                        <input
                            {...register("title")}
                            defaultValue=""
                            id={"title"}
                            type={"text"}
                            placeholder={"Title..."}
                            aria-invalid="true"
                            aria-describedby={`title-error`}
                            className={classNames(
                                errors.title! &&
                                ("text-red-900 ring-red-400 placeholder:text-red-300 focus:ring-1 focus:ring-inset focus:ring-red-500" as string),
                                "block w-full px-2 rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:outline-none  ring-gray-400 dark:bg-transparent  sm:text-sm sm:leading-6"
                            )}
                        />
                        <ErrorMessage>{errors.title?.message}</ErrorMessage>
                    </div>
                </div>

                <div className="">
                    <Controller
                        name={"description"}
                        control={control}
                        render={({field}) => (
                            <SimpleMDE
                                options={options}
                                className={classNames(
                                    errors.description! &&
                                    "custom-borderless  border border-red-500 focus:ring-inset focus:ring-red-500",
                                    "rounded-md dark:bg-transparent dark:text-white"
                                )}
                                {...field}
                                placeholder={"Description..."}
                            />
                        )}
                    />
                    <ErrorMessage>{errors.description?.message}</ErrorMessage>
                </div>

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="flex items-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-transparent dark:text-gray-100"
                >
                    Submit New Issue {isSubmitting && <Spinner/>}
                </button>
            </form>
        </div>
    );
};

export default NewIssuePage;
