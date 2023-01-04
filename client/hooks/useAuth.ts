import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

interface UseAuthProps {
  isAuthPage: boolean
  route: string
}

const useAuth = ({ isAuthPage, route }: UseAuthProps, dependency = []) => {
  const { user } = useSelector((state: RootState) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!user && !isAuthPage) {
      router.push(route)
    } else if (isAuthPage && user) {
      router.push(route)
    }
  }, [user])
}

export default useAuth
