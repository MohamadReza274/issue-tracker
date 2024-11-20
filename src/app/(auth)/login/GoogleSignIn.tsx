import React from 'react';
import {GoogleIcon} from "@/lib/icons";
import {signIn} from '@/app/auth'

const GoogleSignIn = () => {
    return (
        <form action={async() => {
            "use server"
            await signIn("google");
        }}>
            <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-transparent dark:text-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
            >
                <GoogleIcon className="h-5 w-5"/>
                <span className="text-sm font-semibold leading-6">Google</span>
            </button>
        </form>
    );
};

export default GoogleSignIn;