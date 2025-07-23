// types/next-auth.d.ts
import NextAuth, { type DefaultSession } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider`
   */
  interface Session {
    user: {
      userId: number
      fullName: string
      emailAddress: string
      avatar: string
      sessionExpiryDate: Date
    }
  }
}