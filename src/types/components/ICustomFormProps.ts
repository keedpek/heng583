import { IFormConfig } from "../IFormConfig";

export interface ICustomFormProps {
  config: IFormConfig;
  onRebuild: () => void;
}
