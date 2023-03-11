import React, { useRef } from "react";
import CSVInterface from "../dashboard/CSVInterface";
import "./LoginWithLocalStorage.css";
function LoginWithLocalStorage() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
  };

  return (
    <div>
      {getEmail && getPassword ? (
        <CSVInterface />
      ) : (
        <div className="center">
          <form onSubmit={handleSubmit}>
            <div class="input-container ic1">
              <input type="text" placeholder="Enter Your email" ref={email} />
            </div>
            <div class="input-container ic2">
              <input
                type="password"
                placeholder="Type your password"
                ref={password}
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default LoginWithLocalStorage;
