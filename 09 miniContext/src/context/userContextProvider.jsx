import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
//like we have outlet we dont change we wont change header and footer and display outlet.
// in same way children is nothing but a name give that whatever we get like props we can pass on away.
export default UserContextProvider;
