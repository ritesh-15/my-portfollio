import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { logout, setCredentials } from "../app/features/authSlice"
import { useProfileQuery } from "../app/services/auth/auth.service"

const useRefresh = () => {
  const { data } = useProfileQuery(undefined)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(setCredentials({ user: data.user }))
    } else {
      dispatch(logout())
    }
  }, [data])
}

export default useRefresh
