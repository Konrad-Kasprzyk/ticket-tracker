import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingUser from "./LoadingUser.page";
import LoginError from "./LoginError.page";

function LoginPage() {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  };

  if (user) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <LoadingUser />;
  }

  if (error) {
    return <LoginError />;
  }

  return (
    <>
      <div> LoginPage</div>
      <button onClick={() => signInWithGoogle()}>Log in</button>
    </>
  );
}

export default LoginPage;
