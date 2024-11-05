import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <main className="relative isolate min-h-full text-black dark:text-white">
            {/*<Image*/}
            {/*    alt=""*/}
            {/*    src={NotfoundImage}*/}
            {/*    className="absolute inset-0 -z-10 h-full w-full object-cover object-top"*/}
            {/*/>*/}
            <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                <p className="text-base font-semibold leading-8">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
                <p className="mt-4 text-base sm:mt-6">Sorry, we couldn’t find the page you’re looking
                    for.</p>
                <div className="mt-10 flex justify-center">
                    <Link href="/" className="text-sm font-semibold leading-7 border rounded-md px-3 py-1">
                        <span aria-hidden="true">&larr;</span> Back to home
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;