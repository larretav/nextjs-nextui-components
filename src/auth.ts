import NextAuth from "next-auth"
import Credentials from 'next-auth/providers/credentials'
import { sayHello } from "./utils/test"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        userName: {},
        password: {},
      },

      authorize: async (credentials) => {

        sayHello('Juan')

        return { email: '' }


      },
    })
  ],
})