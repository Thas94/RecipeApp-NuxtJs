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
            const users = [{
                id: 1,
                email: "Thabiso@test.co.za",
                password: "<r,y*hgn`~[52+->",
                username: "Thabiso"
            },
            {
              id: 2,
              email: "Thabiso@test.co.za",
              password: "<r,y*hgn`~[52+->",
              username: "Thabiso"
          }]

          return users.find(x => x.email == credentials.email && x.password == credentials.password)

            // if(credentials.email === user && credentials.password === user.password)
            // return user
          }
        }),
      ]
})