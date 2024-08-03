import { getToken } from "../helpers/JWT"
import { jwtDecode } from "jwt-decode"

const Home = () => {
  const token = getToken()
  const user = jwtDecode(token)

  console.log(user)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home