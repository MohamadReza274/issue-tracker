"use client"

import React, {useState} from 'react';
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'
import {ExclamationTriangleIcon, TrashIcon} from "@/lib/icons";
import axios from "axios";
import {useRouter} from "next/navigation";
import {Spinner} from "@/app/Components";

interface Props {
    issueId: number;
}

const DeleteIssueButton = ({issueId}: Props) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [error, setError] = useState({hasError: false, message: ""});
    const [isDeleting, setDeleting] = useState(false)

    const handleDeleteIssue = async (issueId: number) => {
        try {
            setOpen(false);
            setDeleting(true);
            await axios.delete(`http://localhost:3000/api/issues/${issueId}`);
            router.replace("/issues");
            router.refresh();
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to delete issue";
            console.log(e);
            setOpen(false)
            setDeleting(false);
            setError({hasError: true, message});
        }
    }

    return (
        <>
            <button disabled={isDeleting}
                    className="flex gap-x-2 items-center justify-center bg-red-500 dark:bg-transparent dark:border dark:border-red-400 rounded-md px-4 py-2 text-white dark:text-red-400 dark:hover:text-red-500"
                    onClick={() => setOpen(true)}><TrashIcon className="w-4 h-4"/> Delete Issue {isDeleting &&
                <Spinner/>}
            </button>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white dark:bg-gray-800 dark:text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div
                                        className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-transparent dark:border dark:border-red-600 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600"/>
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle as="h3"
                                                     className="text-base font-semibold text-gray-900 dark:text-gray-200">
                                            Delete Issue
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Are you sure you want to delete this issue? All of data about this issue
                                                will
                                                be
                                                permanently removed.
                                                This action cannot be undone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => handleDeleteIssue(issueId)}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 dark:bg-transparent dark:border dark:border-red-500 dark:hover:border-red-600 dark:text-red-500 dark:hover:text-red-600 transition-colors px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => setOpen(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-transparent dark:text-gray-200 dark:hover:text-gray-300 transition-colors px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-400 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>


            <Dialog open={error.hasError} onClose={() => setError({hasError: false, message: ""})}
                    className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-65 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white dark:bg-gray-800 dark:text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div
                                        className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-transparent dark:border dark:border-red-600 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600"/>
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle as="h3"
                                                     className="text-base font-semibold text-red-500 dark:text-gray-200">
                                            Error
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-700 dark:text-gray-400">
                                                {error.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => setError(prev => ({...prev, hasError: false}))}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 dark:bg-transparent dark:border dark:border-red-500 dark:hover:border-red-600 dark:text-red-500 dark:hover:text-red-600 transition-colors px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Ok
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

        </>

    );
};

export default DeleteIssueButton;