import { NuxtAuthHandler } from '#auth'
import  CredentialsProvider from 'next-auth/providers/credentials'

export default NuxtAuthHandler({
    pages: {
        signIn: 'auth/login',
      },

      providers: [
        // @ts-expect-error
        CredentialsProvider.default({ 
          name: 'Credentials',
          async authorize(credentials: any){
            const user = {
                email: "Thabiso@test.co.za",
                password: "<r,y*hgn`~[52+->"
            }


            if(credentials.email === user.email && credentials.password === user.password)
            return user
          }
        }),
      ]
})