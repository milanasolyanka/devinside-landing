export interface IServiceElement {
  picture: string;
  title: string;
  description: string;
}

export interface ITechnologyCard {
  picture: string;
  title: string;
  content: string[];
}

export interface IButton {
  value: string;
  color: "black" | "blue";
  size?: "default" | "small";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IInput {
  label?: string;
  placeholder?: string;
  value: string;
  type?: "phone" | "sizeable";
  errorMesage?: string;
  errorMessageState?: string;
  name: string;
  setValue: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

interface ICustomNavLink {
  to: string;
  linkText?: string;
}
