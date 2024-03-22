import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login  y Registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/* Joural App*/}
      <Route path="/*" element={<JournalRoutes />} />
      <Route />
    </Routes>
  );
};
