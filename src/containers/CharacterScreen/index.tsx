import { FC } from "react";
import cx from "classnames";
import { Btn } from "../../ui";
import { ModalName, openModal } from "../../redux/slices/modals";
import { addDamage, addLevelSkill } from "../../redux/slices/character";
import { currentCharacter, IParameters, ISkills } from "../../redux/slices/character";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ReactComponent as CharacterIcon } from '../../assets/icons/other/character-icon.svg'
import { ReactComponent as PlusIcon } from '../../assets/icons/other/plus-icon.svg'
import { ReactComponent as DamageIcon } from '../../assets/icons/other/damage-icon.svg'
import { ReactComponent as ImportIcon } from '../../assets/icons/other/import-icon.svg'
import { ReactComponent as ExportIcon } from '../../assets/icons/other/export-icon.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/other/edit-icon.svg'
import { parameterOptions, extraOptions, skillOptions, skillLevel } from "../../data";
import { getIsShowBtn } from "../../utils";
import { currentStack, exportCharacter } from "../../redux/slices/characters";
import styles from "./CharacterScreen.module.scss";


const CharacterScreen: FC = () => {
  const dispatch = useAppDispatch();
  const character = useAppSelector(currentCharacter);
  const stack = useAppSelector(currentStack);
  const { name, parameters, skills} = character;
  const currentName = `${name[0].toUpperCase()}${name.slice(1)}`;

  const handelExportClick = (evt: any) => {
    evt.preventDefault();
    const isInStack = !!stack.find((character) => character.name === name);

    if (isInStack){
      dispatch(openModal(ModalName.MESSAGE));
      return;
    }

    dispatch(exportCharacter(character))
  }

  return (
    <section className={styles.characterScreen}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            <div className={styles.col}>
              <span className={styles.parametersTitle}>Базовые параметры:</span>
              <ul className={styles.list}>
                {
                  Object.entries(parameterOptions).map(([parameter, options]) => {
                    const { text, Icon } = options;
                    return (
                      <li key={parameter} className={styles.item}>
                        <Icon width={16} height={16} />
                        <span className={styles.parameter}>{ text }</span>
                        <span className={styles.value}>{ parameters[parameter as keyof IParameters] }</span>
                      </li>
                    );
                  })
                }
              </ul>

              <span className={styles.parametersTitle}>Доп. параметры:</span>
              <ul className={styles.list}>
                {
                  Object.entries(extraOptions).map(([parameter, options]) => {
                    const { text, Icon } = options;
                    return (
                      <li key={parameter} className={styles.item}>
                        <Icon width={16} height={16} />
                        <span className={styles.parameter}>{ text }</span>
                        <span className={styles.value}>{ parameters[parameter as keyof IParameters] }</span>
                      </li>
                    );
                  })
                }
              </ul>
            </div>

            <div className={styles.col}>
              <div className={styles.buttons}>
                <Btn
                  className={cx(styles.btn, styles.btnDamage)}
                  text={'Редактировать'}
                  onClick={() => dispatch(openModal(ModalName.CHARACTER_FORM))}
                >
                  <EditIcon width={16} height={16} />
                </Btn>
              </div>

              <span className={styles.name}>{ currentName }</span>
              <CharacterIcon width={374} height={374} />

              <Btn
                className={styles.btnDamage}
                text={'Нанести урон'}
                isDisabled={ parameters.lifeForce === 0 }
                onClick={() => dispatch(addDamage())}
              >
                <DamageIcon width={16} height={16} />
              </Btn>
            </div>

            <div className={styles.col}>
              <div className={styles.buttons}>
                <Btn
                  className={cx(styles.btn, styles.btnDamage)}
                  text={'Сохранить'}
                  onClick={handelExportClick}
                >
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
              <ul className={cx(styles.list, styles.maxWidth)}>
                {
                  Object.entries(skillOptions).map(([skill, options]) => {
                    const { text, Icon } = options;
                    const value = skills[skill as keyof ISkills];
                    const level = skillLevel[value]

                    return (
                      <li key={skill} className={styles.item}>
                        <Icon width={16} height={16} />
                        <span className={styles.parameter}>{ text }</span>
                        <span className={styles.value}>{ level }</span>
                        {
                          getIsShowBtn(skill, value, parameters) &&
                          <Btn
                            className={styles.btnSkill}
                            isIcon
                            onClick={() => dispatch(addLevelSkill({ [skill]: (value + 1) }))}
                          >
                            <PlusIcon width={16} height={16} />
                          </Btn>
                        }
                      </li>
                    );
                  })
                }
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterScreen;
