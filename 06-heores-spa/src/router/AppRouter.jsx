import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../ui";
import { MarvelPages } from "../heores";
import { LoginPages } from "../auth";
import { DcPages } from "../heores";
export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPages />} />
        <Route path="dc" element={<DcPages />} />
        <Route path="login" element={<LoginPages />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
