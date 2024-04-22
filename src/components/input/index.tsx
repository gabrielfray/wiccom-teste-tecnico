import Image from "next/image";
interface InputProps {
  icon?: {
    src: string;
    alt: string;
    classes?: React.CSSProperties;
    styled?: string;
  };
  placeholder?: string;
  type?: string;
  name?: string;
  wrapperStyled?: string;
}
import * as Styled from "./styles";

const Input = ({
  icon,
  placeholder,
  type,
  name,
  wrapperStyled,
}: InputProps) => {
  return (
    <Styled.Label htmlFor={name || "name"} styled={wrapperStyled}>
      {icon?.src && icon.alt && (
        <Image
          src={icon.src}
          alt={icon.alt}
          width={24}
          height={24}
          quality={50}
        />
      )}
      <Styled.Input
        type={type || "text"}
        name={name || "name"}
        placeholder={placeholder || "Buscar"}
        autoComplete="off"
      />
    </Styled.Label>
  );
};

export default Input;
