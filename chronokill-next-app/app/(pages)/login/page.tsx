"use client";

import styles from "./styles.module.css";
import { Button, TextInput, Header } from "../../components";
import { useState } from "react";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onClickLog = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email, password)
    
    const userCredentials = {
      email: email,
      password: password,
    };
  console.log(JSON.stringify(userCredentials));

   fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
  })
      .then((response) => {
          if (response.ok) {
              return response.text(); 
          } else {
              console.error("Login failed");
              
          }
      })
      .then((data) => {
          console.log("Login successful:", data);
          window.location.href ='/mainmenu';
          
      })
      .catch((error) => {
          console.error("Error during Login:", error);
      })
      .finally(() => {
          console.log(email,password);
      });
  
  
	  };

  return (
    <div>
      <div className={styles.bg}></div>
      <Header showBackButton={false} />
      <div className={styles.rectangle}>
        <h1 className={styles.h1}>Login</h1>
        <form>
          <TextInput
            type="email"
            title="Email"
            value={email}
            setter={setEmail}
          />
          <TextInput
            type="password"
            title="Password"
            value={password}
            setter={setPassword}
          />
          <Button onClick={onClickLog}>Login</Button>
          <hr className={styles.hr}></hr>
          <p>No Account?</p>
          <Button href="../register"> Register</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
