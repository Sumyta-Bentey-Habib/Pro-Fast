import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../../components/SocialLogin";
import { AuthContext } from "../../context/authcontext/AuthContext"; 

const Login = () => {
  const { register, handleSubmit } = useForm();

  //  Get signIn from AuthContext
  const { signIn } = useContext(AuthContext);

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        console.log("Login successful:", result.user);
        // 👉 Optionally redirect or show toast here
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  };

  return (
    <div className="max-w-sm mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset space-y-4">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            {...register("email", { required: true })}
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            {...register("password", { required: true })}
            placeholder="Password"
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-neutral w-full mt-4">Login</button>
        </fieldset>
      </form>

      <div className="divider">OR</div>

      <SocialLogin />
    </div>
  );
};

export default Login;
