import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";
import Login from "../components/Login";
import Loader from "../components/Loader";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    if (auth?.user !== null && auth.user !== undefined) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, [auth?.user]);


  return ok ? <Outlet /> : <Loader />;
}
