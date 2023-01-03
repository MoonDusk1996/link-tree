import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext<any>({});

function UserProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<any>();
  const [isFething, setIsFething] = useState(false);
  
  
  useEffect(() => {
    fetch('/api/userdata')
    .then((res)=>res.json())
    .then((data)=>console.log(data))

  });

  return (
    <UserContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;