import { FC } from "react";
import { Btn } from "../index";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { currentStack } from "../../redux/slices/characters";
import { importCharacter } from "../../redux/slices/character";
import { closeModal, ModalName } from "../../redux/slices/modals";
import styles from "./Import.module.scss";

const Import: FC = () => {
  const dispatch = useAppDispatch();
  const stack = useAppSelector(currentStack);

  const handleButtonClick = (name: string) => {
    const currentCharacter = stack.find((character) => character.name === name)

    if (!currentCharacter) return;

    dispatch(importCharacter(currentCharacter));
    dispatch(closeModal(ModalName.IMPORT));
  }

  return (
    <div  className={styles.import}>
      <ul className={styles.list}>
        {
          stack.length > 0 && stack.map((character) =>
            <li key={character.name} className={styles.item}>
              <Btn
                text={character.name}
                isTransparent
                onClick={() => handleButtonClick(character.name)}
              />
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default Import;
