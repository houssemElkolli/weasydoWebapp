"use client";

import { Dispatch, SetStateAction, useRef } from "react";

type Props = {
    placeholder: string;
    id: string;
    label: string;
    type: string;
    value: string;
    name: string;
    setAuthState?: Dispatch<
        SetStateAction<{
            username: string;
            password: string;
        }>
    >;
    setProduct?: Dispatch<
        SetStateAction<{
            title: string;
            description: string;
            price: number;
            category: string;
        }>
    >;
};
const SignInInput = ({
    placeholder,
    id,
    label,
    type,
    value,
    name,
    setAuthState,
    setProduct,
}: Props) => {
    const ref: any = useRef();
    return (
        <div className="input-wrapper ">
            <input
                ref={ref}
                className="input"
                placeholder={placeholder}
                type={type}
                value={value}
                name={name}
                onChange={(e) => {
                    e.preventDefault();
                    setAuthState &&
                        setAuthState((old) => ({
                            ...old,
                            [name]: e.target.value,
                        }));
                    setProduct &&
                        setProduct((old) => ({
                            ...old,
                            [name]: e.target.value,
                        }));
                }}
                id={id}
                autoComplete="off"
                style={{ width: "100%" }}
            />
            <label className="label" htmlFor={name}>
                {label}
            </label>

            <button
                className="clear"
                aria-label="Clear input"
                onClick={(e) => {
                    e.preventDefault();
                    ref.current.focus();
                    setAuthState &&
                        setAuthState((old) => ({ ...old, [name]: "" }));
                    setProduct && setProduct((old) => ({ ...old, [name]: "" }));
                }}
            >
                <svg viewBox="0 0 16 16" width="12" height="12">
                    <path
                        d="M 1 1 L 15 15 M 1 15 L 15 1"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SignInInput;
