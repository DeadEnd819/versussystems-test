import { FC } from "react";
import { Btn } from "../../ui";
import { ReactComponent as CreateIcon } from '../../assets/icons/other/create-character-icon.svg'
import { useAppDispatch } from "../../redux/hooks";
import { ModalName, openModal } from "../../redux/slices/modals";
import styles from "./StartScreen.module.scss";

const StartScreen: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section className={styles.startScreen}>
      <div className="container">
        <div className={styles.wrapper}>
          <Btn
            className={styles.btn}
            text={'Создать персонажа'}
            onClick={() => dispatch(openModal(ModalName.CHARACTER_FORM))}
          >
            <CreateIcon width={16} height={16} />
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default StartScreen;
