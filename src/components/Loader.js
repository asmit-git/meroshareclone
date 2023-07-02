import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
const Loader = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    if (auth?.user !== null && auth.user !== undefined) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="max-w-full mx-auto min-h-screen flex flex-col items-center justify-center bg-primary text-white">
      © 2023 CDS and Clearing Limited. All Rights Reserved
    </div>
  );
};

export default Loader;
