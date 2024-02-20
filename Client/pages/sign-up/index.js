import styles from "./sign-up.module.css";
import Link from "next/link";
import { useState, useRef } from "react";

async function createUser(name, email, password) {
  const response = await fetch("http://localhost:3001/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Something went wrong");
  }
  const data = await response.json();
  return data;
}

function SignUpPage() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const [message, setMessage] = useState(null);

  const signUpHandler = async (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const result = await createUser(
        enteredName,
        enteredEmail,
        enteredPassword
      );
      setMessage(result.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      {message && alert(message)}
      <form className={styles.sign_up_form} onSubmit={signUpHandler}>
        <h3 className={styles.sign_up_title}>Sign Up</h3>
        <label htmlFor="name" className={styles.sign_up_username}>
          Name
        </label>
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Name"
          id="name"
          className={styles.username_input}
          required
        />
        <label htmlFor="email" className={styles.sign_up_email}>
          Email
        </label>
        <input
          ref={emailInputRef}
          type="text"
          placeholder="Email"
          id="email"
          className={styles.email_input}
          required
        />
        <label htmlFor="password" className={styles.sign_up_password}>
          Password
        </label>
        <input
          ref={passwordInputRef}
          type="password"
          placeholder="Password"
          id="password"
          className={styles.password_input}
          required
        />
        <Link href="/sign-in" className={styles.register_link}>
          <span className={styles.register_text}>Already have an account?</span>
        </Link>
        <button className={styles.sign_up_btn}>Sign Up</button>
      </form>
    </>
  );
}

export default SignUpPage;
