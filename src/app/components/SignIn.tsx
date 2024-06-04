"use client"
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import SignInInput from "./SignInInput";
import { appPATH } from "../utils/path";

const SignIn = () => {
    const [authState, setAuthState] = useState<{
        username: string;
        password: string;
    }>({ username: "", password: "" });
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await signIn("credentials", {
            username: authState.username,
            password: authState.password,
            redirect: true,
            callbackUrl: appPATH,
        });
    };
    return (
        <div className="signin_container">
            <h1 className="signin_title">Sign In</h1>
            <form onSubmit={handleSubmit} className="signin_form">
                <div>
                    <SignInInput
                        placeholder="User Name"
                        id="username"
                        label="User Name"
                        type="text"
                        value={authState.username}
                        setAuthState={setAuthState}
                        name="username"
                    />
                    <SignInInput
                        placeholder="Password"
                        id="password"
                        label="Password"
                        type="password"
                        value={authState.password}
                        setAuthState={setAuthState}
                        name="password"
                    />
                </div>
                <button className="base_button submit_button " type="submit">
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default SignIn;
