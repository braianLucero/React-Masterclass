import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPages } from "../heores/pages/MarvelPages";
import { LoginPages } from "../auth/pages/LoginPages";
import { DcPages } from "../heores/pages/DcPages";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="marvel" element={<MarvelPages />} />
        <Route path="dc" element={<DcPages />} />
        <Route path="login" element={<LoginPages />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
