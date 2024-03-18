import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heores";
import { LoginPages } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPages />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
