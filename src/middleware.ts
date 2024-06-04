import { NextRequestWithAuth, withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req: NextRequestWithAuth) {}, {
    callbacks: {
        authorized: ({
            token,
        }: {
            token: { username: string; token: string };
        }) => {
            return !!token;
        },
    },
});

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/dashboard/:path*",
};
