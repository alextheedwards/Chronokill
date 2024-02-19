"use client";

import styles from "./styles.module.css";
import { Button, TextInput, Header } from "../../components";
import { useState } from "react";


export const Register = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setSetFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onClickSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const userCredentials = {
      email: email,
      confirmEmail: confirmEmail,
      password: password,
      confirmPassword: confirmPassword,
      firstName: firstName,
      lastName: lastName,
  };
  console.log(JSON.stringify(userCredentials));
  
  fetch("http://localhost:8080/api/register", {
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
              console.error("Register failed");
              
          }
      })
      .then((data) => {
          console.log("Register successful:", data);
           window.location.href ='/mainmenu';
          
      })
      .catch((error) => {
          console.error("Error during Register:", error);
      })
      .finally(() => {
          console.log(email, confirmEmail, password, confirmPassword, firstName, lastName);
      });
  
  
	  };


  return (
    <div>
      <div className={styles.bg}></div>
      <Header showBackButton={true} />
      <div className={styles.rectangle}>
        <h1 className={styles.h1}>Register</h1>
        <form>
          <TextInput
            type="email"
            title="Email"
            value={email}
            setter={setEmail}
          />
          <TextInput
            type="confirm email"
            title="Confirm Email"
            value={confirmEmail}
            setter={setConfirmEmail}
          />
          <TextInput
            type="password"
            title="Password"
            value={password}
            setter={setPassword}
          />
          <TextInput
            type="password"
            title="Confirm Password"
            value={confirmPassword}
            setter={setConfirmPassword}
          />
          <TextInput
            type="first name"
            title="First Name"
            value={firstName}
            setter={setSetFirstName}
          />
          <TextInput
            type="last name"
            title="Last Name"
            value={lastName}
            setter={setLastName}
          />
          <Button onClick={onClickSignUp}>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
