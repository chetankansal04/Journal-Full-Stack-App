import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { createUser } from "../services/userServices";
import { useState } from "react";

const AuthForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const user = {
      userName: userName,
      password: password,
    };

    try {
      const response = await createUser(user);
      console.log("User created successfully:", response);
      alert("User created successfully");
      localStorage.setItem("token", response.token);
      localStorage.setItem("userName", response.userName);
      navigate("/login");
    } catch(e) {
      console.error("Error creating user:",e);
      alert("Error creating user. Please try again.");
    }
  };
  
  return (
    <div className="mb-0 mt-6 space-y-4 rounded-xl p-4 shadow-lg sm:p-6 lg:p-8 w-2/3 md:w-1/3 place-self-center">
      <form
        className="flex flex-col gap-3 items-center"
        onSubmit={handleRegisterSubmit}
      >
        <p className="text-center text-lg font-medium">
          Sign in to your account
        </p>

        <input
          type="text"
          className="w-full rounded-lg border-gray-200 p-3 pe-12 text-base shadow-sm transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring "
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full rounded-lg border-gray-200 p-3 pe-12 text-base shadow-sm transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring "
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
        >
          Register
        </button>
        <div className="flex">
        <p>Already have an account ? </p>
        <Link to="/login">
          <p className="text-base font-semibold transition hover:scale-110 focus:outline-none focus:ring ml-2">Login </p>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
