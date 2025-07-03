// @ts-expect-error
import { NuxtAuthHandler } from '#auth'
import  CredentialsProvider from 'next-auth/providers/credentials'

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
            const user = {
                email: "Thabiso@test.co.za",
                password: "<r,y*hgn`~[52+->",
                username: "Thabiso"
            }

            if(credentials.email === user.email && credentials.password === user.password)
            return user
          }
        }),
      ]
})