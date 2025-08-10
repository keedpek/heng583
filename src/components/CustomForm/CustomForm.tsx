import { FC, JSX, useState } from "react";
import style from "./CustomForm.module.css";
import { ICustomFormProps } from "@/types/components/ICustomFormProps";
import Input from "@/UI/Input/Input";
import Textarea from "@/UI/Textarea/Textarea";
import Checkbox from "@/UI/Checkbox/Checkbox";
import Button from "@/UI/Button/Button";

const CustomForm: FC<ICustomFormProps> = ({ config, onRebuild }) => {
  const { inputs, textareas, checkboxes } = config;
  const [formData, setFormData] = useState<Record<string, string | boolean>>(
    {}
  );

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const textareaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const renderInputs = (): JSX.Element[] => {
    return Array.from({ length: inputs }, (_, index) => {
      const number = index + 1;
      return (
        <Input
          value={(formData[`${number}input`] as string) || ""}
          onChange={inputChangeHandler}
          name={`${number}input`}
          label={`${number} input`}
          requierd
        />
      );
    });
  };

  const renderTextareas = (): JSX.Element[] => {
    return Array.from({ length: textareas }, (_, index) => {
      const number = index + 1;
      return (
        <Textarea
          value={(formData[`${number}textarea`] as string) || ""}
          onChange={textareaChangeHandler}
          name={`${number}textarea`}
          label={`${number} textarea`}
          requierd
        />
      );
    });
  };

  const renderCheckboxes = (): JSX.Element[] => {
    return Array.from({ length: checkboxes }, (_, index) => {
      const number = index + 1;
      return (
        <Checkbox
          checked={(formData[`${number}checkbox`] as boolean) || false}
          onChange={checkboxChangeHandler}
          name={`${number}checkbox`}
          label={`${number} checkbox`}
          requierd
        />
      );
    });
  };

  const submitHandler = () => {
    alert("form submited");
  };

  return (
    <form onSubmit={submitHandler}>
      {renderInputs()}
      {renderTextareas()}
      {renderCheckboxes()}
      {!inputs && !textareas && !checkboxes && (
        <h1>Rebuild form with non-zero values</h1>
      )}
      <div className={style.btnContainer}>
        <Button type="submit">Submit</Button>
        <Button variant="danger" onClick={onRebuild}>
          Rebuild
        </Button>
      </div>
    </form>
  );
};

export default CustomForm;
