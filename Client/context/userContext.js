// userContext.js
import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";

export const AuthUserContext = createContext({});

export default function AuthUserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Check if we have user data, otherwise it will be redirect to main page
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch("http://localhost:3001/auth/check-auth", {
          credentials: "include", // Include cookies in the request
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } 
        else {
          const errorData = await response.json();
          if (errorData.message === "Token has expired") {
            // Token has expired, log out the user
            setUser(null);
            document.cookie =
              "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            alert("Your session has expired. Please log in again");
            router.replace("/");
          } 
          else {
            // Handle not authenticated
            router.replace("/");
          }
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuthentication();
  }, [setUser]);

  // Log Out Button
  const logoutHandler = async () => {
    try {
      // Make a request to the server to clear cookies
      const response = await fetch("http://localhost:3001/auth/logout", {
        method: "POST",
        credentials: "include", // Include cookies in the request
      });

      if (response.ok) {
        // Clear the user information on the client side
        setUser(null);
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.replace("/");
      } 
      else {
        // Handle error (e.g., show an error message)
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Check token expiration and log out if needed

  return (
    <AuthUserContext.Provider value={{ user, setUser, logoutHandler }}>
      {children}
    </AuthUserContext.Provider>
  );
}
