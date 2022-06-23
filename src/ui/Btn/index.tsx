import { FC } from "react";
import cx from "classnames";
import { IBtn } from "./Btn.d";
import styles from "./Btn.module.scss";

const Btn: FC<IBtn> = ({
  className,
  type= 'button',
  text,
  isIcon = false,
  isTransparent,
  children,
  onClick
}) => {
  const btnClassName = cx(
    styles.btn,
    {
      [className as string]: className,
      [styles.isIcon]: isIcon,
      [styles.isTransparent]: isTransparent
    }
  );

  return (
    <button
      className={btnClassName}
      type={type}
      onClick={onClick}
    >
      { text }
      { children }
    </button>
  );
};

export default Btn;
