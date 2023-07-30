import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "8d0e54bcb039a0141219",
      clientSecret: "a6174c19595a9bbaa824fdd84da2bf1b30c39a49",
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
