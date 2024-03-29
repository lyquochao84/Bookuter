import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./sign-in.module.css";

async function logUserIn(email, password) {
  const response = await fetch("http://localhost:3001/auth/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

function SignInPage() {
  const [message, setMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const signInHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const result = await logUserIn(enteredEmail, enteredPassword);
      setMessage(result.message);
      setIsLoggedIn(true);
    } 
    catch (error) {
      console.error("Sign in error:", error.message);
      setMessage(error.message);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Reload the page after a short delay (adjust the delay as needed)
      setTimeout(() => {
        window.location.reload();
      }, 100);
      router.replace("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      {message && alert(message)}
      <form className={styles.sign_in_form} onSubmit={signInHandler}>
        <h3 className={styles.sign_in_title}>Login</h3>
        <label htmlFor="username" className={styles.sign_in_username}>
          Username
        </label>
        <input
          ref={emailInputRef}
          type="text"
          placeholder="Email or Phone"
          id="username"
          className={styles.username_input}
          required
        />
        <label htmlFor="password" className={styles.sign_in_password}>
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
        <Link href="/sign-up" className={styles.register_link}>
          <span className={styles.register_text}>Create an account</span>
        </Link>
        <button className={styles.sign_in_btn}>Log In</button>
      </form>
    </>
  );
}

export default SignInPage;
