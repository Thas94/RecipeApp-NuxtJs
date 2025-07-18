//@ts-expect-error
import { getServerSession } from "#auth"

export default eventHandler(async event => {
    const session = await getServerSession(event)
    if (!session) {
      return { status: 'unauthenticated!' }
    }
    return session
})