import { FC } from "react";
import styles from "./MessageModal.module.scss";

const MessageModal: FC = () => {
  return (
    <div className={styles.message}>
      <span className={styles.text}>Персонаж с таким именем уже существует!</span>
    </div>
  );
};

export default MessageModal;
