import React from 'react';
import SignIn from "@/app/(auth)/login/SignIn";
import Image from "next/image";
import Logo from "@/images/Logo.svg";
import GoogleSignIn from "@/app/(auth)/login/GoogleSignIn";

const LoginPage = () => {
    return (
        <div className="flex min-h-full flex-1">
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <Image height={40} width={36}
                               alt="Your Company"
                               src={Logo}
                               className="h-10 w-auto"
                        />
                        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10">
                        <div>
                            <SignIn/>
                        </div>

                        <div className="mt-10">
                            <div className="relative">
                                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"/>
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-white dark:bg-gray-800 dark:text-gray-100 px-6 text-gray-900">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6">
                            {/*   google provider*/}
                                <GoogleSignIn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
                <Image width={500} height={600}
                       alt=""
                       src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                       className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default LoginPage;