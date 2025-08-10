import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { FC } from "react";
import FormPage from "./pages/FormPage";
import { FORM_PAGE_ROUTE, MAIN_PAGE_ROUTE } from "./consts/routes";

const App: FC = () => {
  return (
    <Routes>
      <Route path={MAIN_PAGE_ROUTE} Component={MainPage} />
      <Route path={FORM_PAGE_ROUTE} Component={FormPage} />
      <Route path="*" element={<Navigate to={MAIN_PAGE_ROUTE} />} />
    </Routes>
  );
};

export default App;
