import { FC } from "react";
import { Btn } from "../index";
// import { IImport } from "./Import.d";
import styles from "./Import.module.scss";

const Import: FC = () => {
  return (
    <div  className={styles.import}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Btn text={'Фродо'} isTransparent />
        </li>
        <li className={styles.item}>
          <Btn text={'Фродо'} isTransparent />
        </li>
        <li className={styles.item}>
          <Btn text={'Фродо'} isTransparent />
        </li>
      </ul>
    </div>
  );
};

export default Import;
