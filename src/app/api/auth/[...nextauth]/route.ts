import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { fakestoreapiPATH } from "@/app/utils/path";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "User Name",
                    type: "text",
                    placeholder: "Jhon doe",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials, req) {
                if (!credentials?.username || !credentials?.password)
                    return null;

                const { username, password } = credentials;

                const res = await fetch(fakestoreapiPATH + "/auth/login", {
                    method: "POST",
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                    headers: { "Content-Type": "application/json" },
                });
                const data: { token: string } = await res.json();

                if (res.ok && data) {
                    const user = { token: data?.token, username: username };
                    return user;
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.user = user;
            }
            return token;
        },
        session: async ({ token, session }) => {
            session.user = token.user;

            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
