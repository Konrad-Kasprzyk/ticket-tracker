import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function LoadingUser() {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  //if (user) {
  //  return <Navigate to="/" />;
  //}

  return <div> Loading</div>;
}

export default LoadingUser;
