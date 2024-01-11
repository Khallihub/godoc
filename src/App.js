import TextEditor from "./TextEditor";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import { useState } from "react";
import AuthContext from "./AuthContext";
// import { v4 as uuidV4 } from "uuid"

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to={`/signup`} />, exact: true },
    { path: "/signup", element: <SignUpForm /> },
    { path: "/login", element: <LogInForm /> },
    { path: "/home", element: <Home /> },
    { path: "/documents/:id", element: <TextEditor /> },
  ]);

  const [email, setEmail] = useState(null);

  const updateEmail = (value) => {
    console.log("Updating email:", value);
    setEmail((prevState) => value);
  };

  return (
    <AuthContext.Provider
      value={{
        email: email,
        updateEmail: updateEmail,
      }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
