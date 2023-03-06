import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { getToken, getUser } from '@/utils/auth'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: {  label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const res = await getToken({
            username: credentials.username,
            password: credentials.password,
            client_id: serverRuntimeConfig.CLIENT_ID,
            client_secret: serverRuntimeConfig.CLIENT_SECRET,
          })
          if (!res) {
            return null
          }
          if (res) {
            const user = await getUser(res.access_token)
            return {
              id: user.id,
              name: user.firstname + ' ' + user.lastname,
              email: user.email,
              token: {
                access_token: res.access_token,
                refresh_token: res.refresh_token,
                expires_in: Date.now() + (res.expires_in * 1000),
              }
            }
          }
        } catch (err) {
					throw new Error('Invalid username or password')
        }
      },
    }),
  ],
	session: {
		maxAge: 2* 24 * 60 * 60, // 2 days
	},
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async jwt({token, user}) {
			if (user) {
				token.user = user
			}
      return Promise.resolve(token)
    },
    async session({token}) {
			return Promise.resolve(token.user)
    },
  },
})
