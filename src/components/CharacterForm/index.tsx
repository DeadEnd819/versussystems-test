import { FC } from "react";
// import { ICharacterForm } from "./CharacterForm.d";
import styles from "./CharacterForm.module.scss";

const CharacterForm: FC = () => {
  return (
    <div className={styles.characterForm}>
      <form action="">
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.field}>
              <label htmlFor="name">Имя</label>
              <input id={'name'} type="text" name={'name'} placeholder={'Введите имя'} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.field}>
              <label htmlFor="strengt">Сила</label>
              <input id={'strengt'} type="number" name={'strengt'} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.field}>
              <label htmlFor="agility">Ловкость</label>
              <input id={'agility'} type="number" name={'agility'} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.field}>
              <label htmlFor="intelligence">Интелект</label>
              <input id={'intelligence'} type="number" name={'intelligence'} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.field}>
              <label htmlFor="charismah">Харизма</label>
              <input id={'charismah'} type="number" name={'charismah'} />
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default CharacterForm;
