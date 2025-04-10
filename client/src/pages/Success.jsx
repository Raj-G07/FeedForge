import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Success = () => {

  const navigate = useNavigate();
  const [searchParams]=  useSearchParams();

  useEffect(() => { 
      const token = searchParams.get("token") ||''
      console.log(token);
      if (token){
                  localStorage.setItem("token",token)
          navigate("/dashboard")
      }else{
          navigate("/")
      }

  }, [searchParams])

  return (
    <>
          TokenWIthBe:{searchParams.get("token")}
    </>
  )
}

export default Success