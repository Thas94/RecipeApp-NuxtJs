// @ts-expect-error
import { NuxtAuthHandler } from '#auth'
import  CredentialsProvider from 'next-auth/providers/credentials'

const config = useRuntimeConfig()

export default NuxtAuthHandler({
    callbacks: {
        // @ts-expect-error
        jwt({token, user}){
          if(user){
            token = {
              ... token,
              ... user
            }
          }
          return token
        },
        // @ts-expect-error
        async session({session, token}){
          // Fetch data OR add previous data from the JWT callback.
          session.user = {
            ... token,
            ... session.user
          }
          return session
        }
      },
      providers: [
        // @ts-expect-error
        CredentialsProvider.default({ 
          name: 'Credentials',
          async authorize(credentials: any){
            const res = await fetch(`${config.apiUrl}/User/Login?email=${credentials.email}&password=${credentials.password}`, {
              method: 'GET',
              headers: { "Content-Type": "application/json" }
            })

            const user = await res.json()

            if(user.userId > 0)
              return user
            else
              return null
          }
        }),
      ]
})