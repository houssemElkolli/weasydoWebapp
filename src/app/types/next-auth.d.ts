import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

export module "next-auth" {
    interface Session {
        user: {
            token: string;
            username: string;
        };
    }
}
export module "next-auth/jwt" {
    interface JWT {
        user: {
            username: string;
            token: string;
        };
    }
}
