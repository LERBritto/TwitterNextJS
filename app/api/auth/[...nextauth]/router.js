import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { signIn, signOut } from "next-auth/react";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    page: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
    },
});

export { handler as GET, handler as POST }