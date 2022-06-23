import { FC } from "react";
import cx from "classnames";
import { IBtn } from "./Btn.d";
import styles from "./Btn.module.scss";

const Btn: FC<IBtn> = ({
  className,
  type= 'button',
  text,
  isIcon = false,
  children
}) => {
  const btnClassName = cx(
    styles.btn,
    {
      [className as string]: className,
      [styles.isIcon]: isIcon
    }
  );

  return (
    <button
      className={btnClassName}
      type={type}
    >
      { text }
      { children }
    </button>
  );
};

export default Btn;
