import { FC, useState } from "react";
import { IFormConfig } from "@/types/IFormConfig";
import CustomForm from "@/components/CustomForm/CustomForm";
import FormConfigurator from "@/components/FormConfigurator/FormConfigurator";

const FormPage: FC = () => {
  const [formConfig, setFormConfig] = useState<IFormConfig | null>(null);

  const formResetHandler = () => {
    setFormConfig(null);
  };

  const setFormConfigHandler = (config: IFormConfig) => {
    setFormConfig(config);
  };

  if (formConfig) {
    return <CustomForm config={formConfig} onRebuild={formResetHandler} />;
  }

  return <FormConfigurator applyConfig={setFormConfigHandler} />;
};

export default FormPage;
