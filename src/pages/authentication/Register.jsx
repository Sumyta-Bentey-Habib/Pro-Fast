import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authcontext/AuthContext"; 
import SocialLogin from "../../components/SocialLogin";
const Register = () => {
  const { register, handleSubmit } = useForm();

  // Get createUser from AuthContext
  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    const { name, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      console.error("❌ Passwords do not match!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log("✅ Registration successful:", result.user);

  
      })
      .catch((error) => {
        console.error("❌ Registration error:", error.message);
      });
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset space-y-4">
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("name", { required: true })}
            placeholder="Full Name"
          />

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
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Password"
          />

          <label className="label">Confirm Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            {...register("confirmPassword", { required: true })}
            placeholder="Confirm Password"
          />

          <button className="btn btn-neutral w-full mt-4">Register</button>
        </fieldset>
        <div className="divider">OR</div>

      <SocialLogin />
      </form>
    </div>
  );
};

export default Register;
