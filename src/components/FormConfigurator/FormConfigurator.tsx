import { FC, useState } from "react";
import style from "./FormConfigurator.module.css";
import { IFormConfiguratorProps } from "@/types/components/IFormConfiguratorProps";
import { IFormConfig } from "@/types/IFormConfig";
import Button from "@/UI/Button/Button";

const FormConfigurator: FC<IFormConfiguratorProps> = ({ applyConfig }) => {
  const [config, setConfig] = useState<IFormConfig>({
    inputs: 0,
    textareas: 0,
    checkboxes: 0,
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    applyConfig(config);
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <div className={style.formRow}>
        <label>input:</label>
        <input
          type="number"
          name="inputs"
          value={config.inputs}
          onChange={inputChangeHandler}
          required
          min={0}
          max={10}
        />
      </div>

      <div className={style.formRow}>
        <label>textarea:</label>
        <input
          type="number"
          name="textareas"
          value={config.textareas}
          onChange={inputChangeHandler}
          required
          min={0}
          max={10}
        />
      </div>

      <div className={style.formRow}>
        <label>checkbox:</label>
        <input
          type="number"
          name="checkboxes"
          value={config.checkboxes}
          onChange={inputChangeHandler}
          required
          min={0}
          max={10}
        />
      </div>

      <Button type="submit">Build</Button>
    </form>
  );
};

export default FormConfigurator;
