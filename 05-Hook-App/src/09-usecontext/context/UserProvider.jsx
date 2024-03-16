import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const user = {
    id: 123,
    name: "braian lucero ",
    email: "brasanluc123@gmail.com",
  };
  return (
    <UserContext.Provider value={{ hola: "Mundo", user: user }}>
      {children}
    </UserContext.Provider>
  );
};
