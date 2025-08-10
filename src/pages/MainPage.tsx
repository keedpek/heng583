import { FORM_PAGE_ROUTE } from "@/consts/routes";
import Button from "@/UI/Button/Button";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const MainPage: FC = () => {
  const navigate = useNavigate();

  const formBtnClickHandler = () => {
    navigate(FORM_PAGE_ROUTE);
  };

  return (
    <>
      <h1>Click the button to configure new form</h1>
      <Button onClick={formBtnClickHandler} size="l">
        FORM
      </Button>
    </>
  );
};

export default MainPage;
