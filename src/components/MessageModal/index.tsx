import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { messageFromModal } from "../../redux/slices/modals";
import styles from "./MessageModal.module.scss";

const MessageModal: FC = () => {
  const massage = useAppSelector(messageFromModal);

  return (
    <div className={styles.message}>
      <span className={styles.text}>{ massage }</span>
    </div>
  );
};

export default MessageModal;
