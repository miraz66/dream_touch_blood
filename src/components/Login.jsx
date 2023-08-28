import { useState } from "react";
import SingUp from "./SingUp";
import { useNavigate } from "react-router-dom";
function Login() {
  const [login, setLogin] = useState(true);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  // function userlogin(e) {
  //   console.log(e);
  //   e.preventDefault();

  //   const url = "http://127.0.0.1:8000/api/token/";
  //   fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       username: userName,
  //       password: password,
  //     }),
  //   })
  //     .then((response) => {
  //       if (response.status == 400) {
  //         throw new Error("Something went worng.. ");
  //       } else if (response.status == 401) {
  //         navigate("/login");
  //         throw new Error("Something went worng..");
  //       } else if (response.status == 200) {
  //         navigate("/mainpage");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       localStorage.setItem("access", data.access);
  //       localStorage.setItem("refresh", data.access);
  //       console.log(data);
  //     })
  //     .catch((data) => {
  //       console.log(data);
  //     });
  // }

  function userlogin(e) {
    e.preventDefault();
    navigate("/main-page");
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="pt-20 flex flex-col items-center md:justify-center px-3 md:px-6 py-8 mx-auto h-screen md:h-screen lg:py-0">
          <div className="w-full bg-gradient-to-br from-gray-500 via-red-500 to-gray-500 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="bg-white py-5 rounded-md">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  {login ? (
                    <span>Login in to your account </span>
                  ) : (
                    <span>Create to your account</span>
                  )}
                </h1>
                {login ? (
                  <form className="space-y-4 md:space-y-6" onSubmit={userlogin}>
                    <div>
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your username
                      </label>
                      <input
                        type="username"
                        name="username"
                        id="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white text-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-cente bg-red-600"
                    >
                      Login in
                    </button>
                  </form>
                ) : (
                  <SingUp />
                )}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <button
                    onClick={() => setLogin(!login)}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    {login ? <span>Sign up</span> : <span>Log In</span>}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

// bg-gradient-to-br from-gray-500 via-red-500 to-gray-500
