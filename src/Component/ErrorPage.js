import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  //navigate('/') = back to home
  // navigate(-1)  = one route back
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  }, []);

  return (
    <>
      <h1> Error </h1>
    </>
  );
}

export default ErrorPage;
