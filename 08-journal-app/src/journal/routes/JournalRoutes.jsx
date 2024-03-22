import { Navigate, Route, Routes } from "react-router-dom";
import { Journalpages } from "../pages/Journalpages";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Journalpages />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
