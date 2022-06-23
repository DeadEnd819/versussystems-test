import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Btn } from "../../ui";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { create, currentCharacter } from "../../redux/slices/character";
import { closeModal, ModalName } from "../../redux/slices/modals";
import { fields } from "../../data";
import { InitialState } from "./CharacterForm.d";
import styles from "./CharacterForm.module.scss";

const getCurrentValue = (value: string) => {
  const int = parseInt(value.replace(/^0+/, ''));
  if (isNaN(int)) return 0;
  return int < 0 ? 0 : int > 9 ? 9 : int;
}

const CharacterForm: FC = () => {
  const { name, parameters } = useAppSelector(currentCharacter);
  const [values, setValues] = useState<InitialState>({ name, ...parameters });
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const isCharScreen = pathname === '/character';
  const isFormValid = !values.name;

  const handleFieldChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    const value = name === 'name' ? evt.target.value : getCurrentValue(evt.target.value);

    setValues({...values, ...{[name]: value}});
  }, [values]);

  const handleFormSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { name, ...parameters } = values;

    dispatch(closeModal(ModalName.CHARACTER_FORM))
    dispatch(create({ name, parameters }));

    if (!isCharScreen)
      navigate('/character');
  }, [values, isCharScreen]);

  return (
    <div className={styles.characterForm}>
      <form action="" onSubmit={handleFormSubmit}>
        <ul className={styles.list}>
          {
            fields.length > 0 && fields.map((field) =>
              <li key={field.name} className={styles.item}>
                <div className={styles.field}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    value={values[field.name]}
                    placeholder={field.placeholder}
                    onChange={handleFieldChange}
                  />
                </div>
              </li>
            )
          }
        </ul>
        <Btn
          className={styles.submit}
          type='submit'
          text={'Подтвердить'}
          isDisabled={isFormValid}
        />
      </form>
    </div>
  );
};

export default CharacterForm;
