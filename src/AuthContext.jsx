// AuthContext.js
import React from "react";

const AuthContext = React.createContext({
  email: null,
  updateEmail: () => {},
});

export default AuthContext;
