
import React, { useContext } from "react";
import { AuthContext } from "../context/authcontext/AuthContext"; 

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("✅ Google Sign-In success:", result.user);
        // Optionally redirect the user or show success message
      })
      .catch((error) => {
        console.error("❌ Google Sign-In error:", error);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
