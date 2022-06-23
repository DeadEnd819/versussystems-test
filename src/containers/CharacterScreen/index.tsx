import { FC } from "react";
import { ReactComponent as CharactertIcon } from '../../assets/icons/other/character-icon.svg'
import { ReactComponent as PlusIcon } from '../../assets/icons/other/plus-icon.svg'
import { ReactComponent as DamageIcon } from '../../assets/icons/other/damage-icon.svg'
import { ReactComponent as ImportIcon } from '../../assets/icons/other/import-icon.svg'
import { ReactComponent as ExportIcon } from '../../assets/icons/other/export-icon.svg'
import { ReactComponent as StrengthIcon } from '../../assets/icons/basic-parameters/strength-icon.svg'
import { ReactComponent as AgilityIcon } from '../../assets/icons/basic-parameters/agility-icon.svg'
import { ReactComponent as IntelligenceIcon } from '../../assets/icons/basic-parameters/intelligence-icon.svg'
import { ReactComponent as CharismahIcon } from '../../assets/icons/basic-parameters/charisma-icon.svg'
import { ReactComponent as LifeForceIcon } from '../../assets/icons/extra-options/life-force-icon.svg'
import { ReactComponent as EvasionIcon } from '../../assets/icons/extra-options/evasion-icon.svg'
import { ReactComponent as EnergyIcon } from '../../assets/icons/extra-options/energy-icon.svg'
import { ReactComponent as AppearanceIcon } from '../../assets/icons/skils/appearance-icon.svg'
import { ReactComponent as ArcheryIcon } from '../../assets/icons/skils/archery-icon.svg'
import { ReactComponent as AttackIcon } from '../../assets/icons/skils/attack-icon.svg'
import { ReactComponent as InsightIcon } from '../../assets/icons/skils/insight-icon.svg'
import { ReactComponent as IntimidationIcon } from '../../assets/icons/skils/intimidation-icon.svg'
import { ReactComponent as LearnabilityIcon } from '../../assets/icons/skils/learnability-icon.svg'
import { ReactComponent as ManipulationIcon } from '../../assets/icons/skils/manipulation-icon.svg'
import { ReactComponent as MedicineIcon } from '../../assets/icons/skils/medicine-icon.svg'
import { ReactComponent as StealthIcon } from '../../assets/icons/skils/stealth-icon.svg'
import { ReactComponent as SurvivalIcon } from '../../assets/icons/skils/survival-icon.svg'
// import { ICharacterScreen } from "./CharacterScreen.d";
import styles from "./CharacterScreen.module.scss";
import { Btn } from "../../ui";
import cx from "classnames";
import { ModalName, openModal } from "../../redux/slices/modals";
import { useAppDispatch } from "../../redux/hooks";

const CharacterScreen: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section className={styles.characterScreen}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            <div className={styles.col}>
              <span className={styles.parametersTitle}>Базовые параметры:</span>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <StrengthIcon width={16} height={16} />
                  <span className={styles.parameter}>Сила</span>
                  <span className={styles.value}>0</span>
                </li>
                <li className={styles.item}>
                  <AgilityIcon width={16} height={16} />
                  <span className={styles.parameter}>Ловкость</span>
                  <span className={styles.value}>0</span>
                </li>
                <li className={styles.item}>
                  <IntelligenceIcon width={16} height={16} />
                  <span className={styles.parameter}>Интелект</span>
                  <span className={styles.value}>0</span>
                </li>
                <li className={styles.item}>
                  <CharismahIcon width={16} height={16} />
                  <span className={styles.parameter}>Харизма</span>
                  <span className={styles.value}>0</span>
                </li>
              </ul>

              <span className={styles.parametersTitle}>Доп. параметры:</span>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <LifeForceIcon width={16} height={16} />
                  <span className={styles.parameter}>Жизненная сила</span>
                  <span className={styles.value}>0</span>
                </li>
                <li className={styles.item}>
                  <EvasionIcon width={16} height={16} />
                  <span className={styles.parameter}>Уклонение</span>
                  <span className={styles.value}>0</span>
                </li>
                <li className={styles.item}>
                  <EnergyIcon width={16} height={16} />
                  <span className={styles.parameter}>Энергичность</span>
                  <span className={styles.value}>0</span>
                </li>
              </ul>
            </div>

            <div className={styles.col}>
              <div className={styles.buttons}>
                <Btn
                  className={cx(styles.btn, styles.btnDamage)}
                  text={'Редактировать'}
                  onClick={() => dispatch(openModal(ModalName.CHARACTER_FORM))}
                >
                  <ExportIcon width={16} height={16} />
                </Btn>
              </div>

              <span className={styles.name}>Ник Персонажа</span>
              <CharactertIcon width={374} height={374} />
              <Btn className={styles.btnDamage} text={'Нанести урон'}>
                <DamageIcon width={16} height={16} />
              </Btn>
            </div>

            <div className={styles.col}>
              <div className={styles.buttons}>
                <Btn className={cx(styles.btn, styles.btnDamage)} text={'Сохранить'}>
                  <ExportIcon width={16} height={16} />
                </Btn>
                <Btn
                  className={cx(styles.btn, styles.btnDamage)}
                  text={'Загрузить'}
                  onClick={() => dispatch(openModal(ModalName.IMPORT))}
                >
                  <ImportIcon width={16} height={16} />
                </Btn>
              </div>

              <span className={styles.parametersTitle}>Скиллы:</span>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <AttackIcon width={16} height={16} />
                  <span className={styles.parameter}>Атака</span>
                  <span className={styles.value}>Нетренированный</span>
                  <Btn className={styles.btnSkill} isIcon>
                    <PlusIcon width={16} height={16} />
                  </Btn>
                </li>
                <li className={styles.item}>
                  <StealthIcon width={16} height={16} />
                  <span className={styles.parameter}>Стелс</span>
                  <span className={styles.value}>Нетренированный</span>
                  <Btn className={styles.btnSkill} isIcon>
                    <PlusIcon width={16} height={16} />
                  </Btn>
                </li>
                <li className={styles.item}>
                  <ArcheryIcon width={16} height={16} />
                  <span className={styles.parameter}>Стрельба из лука</span>
                  <span className={styles.value}>Нетренированный</span>
                  <Btn className={styles.btnSkill} isIcon>
                    <PlusIcon width={16} height={16} />
                  </Btn>
                </li>
                <li className={styles.item}>
                  <LearnabilityIcon width={16} height={16} />
                  <span className={styles.parameter}>Обучаемость</span>
                  <span className={styles.value}>Нетренированный</span>
                  <Btn className={styles.btnSkill} isIcon>
                    <PlusIcon width={16} height={16} />
                  </Btn>
                </li>
                <li className={styles.item}>
                  <SurvivalIcon width={16} height={16} />
                  <span className={styles.parameter}>Выживание</span>
                  <span className={styles.value}>Нетренированный</span>
                  <Btn className={styles.btnSkill} isIcon>
                    <PlusIcon width={16} height={16} />
                  </Btn>
                </li>
                <li className={styles.item}>
                  <MedicineIcon width={16} height={16} />
                  <span className={styles.parameter}>Медицина</span>
                  <span className={styles.value}>Нетренированный</span>
                  <Btn className={styles.btnSkill} isIcon>
                    <PlusIcon width={16} height={16} />
                  </Btn>
                </li>
                <li className={styles.item}>
                  <IntimidationIcon width={16} height={16} />
                  <span className={styles.parameter}>Запугивание</span>
                  <span className={styles.value}>Нетренированный</span>
                  <Btn className={styles.btnSkill} isIcon>
                    <PlusIcon width={16} height={16} />
                  </Btn>
                </li>
                <li className={styles.item}>
                  <InsightIcon width={16} height={16} />
                  <span className={styles.parameter}>Проницательность</span>
                  <span className={styles.value}>Нетренированный</span>
                  <Btn className={styles.btnSkill} isIcon>
                    <PlusIcon width={16} height={16} />
                  </Btn>
                </li>
                <li className={styles.item}>
                  <AppearanceIcon width={16} height={16} />
                  <span className={styles.parameter}>Внешний вид</span>
                  <span className={styles.value}>Нетренированный</span>
                  <Btn className={styles.btnSkill} isIcon>
                    <PlusIcon width={16} height={16} />
                  </Btn>
                </li>
                <li className={styles.item}>
                  <ManipulationIcon width={16} height={16} />
                  <span className={styles.parameter}>Манипулирование</span>
                  <span className={styles.value}>Нетренированный</span>
                  <Btn className={styles.btnSkill} isIcon>
                    <PlusIcon width={16} height={16} />
                  </Btn>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterScreen;
