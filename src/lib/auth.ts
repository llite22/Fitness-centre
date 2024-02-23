import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcryptjs from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
    try {
        connectToDb()
        console.log(credentials);
        const user = await User.findOne({ username: credentials.username })
        if (!user) {
            throw new Error('Пользователь не найден!')
        }

        const isPasswordCorrect = await bcryptjs.compare(credentials.password, user.password)
        if (!isPasswordCorrect) {
            throw new Error('Неверный пароль!')
        }
        return user
    }
    catch (error) {
        console.log(error);
        throw new Error('Что-то пошло не так!')
    }
}



export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user
                }
                catch (error) {
                    console.log(error);
                    return null
                }
            }
        })
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === 'github') {
                connectToDb()
                try {
                    const user = await User.findOne({ email: profile?.email })
                    if (!user) {
                        const newUser = new User({
                            username: profile?.login,
                            email: profile?.email,
                            image: profile?.avatar_url,
                        })
                        await newUser.save()
                    }
                }
                catch (error) {
                    console.log(error)
                    return false
                }
            }
            return true
        },
        ...authConfig.callbacks,
    }
})