import { IField, IOptions } from "../interfaces/common.d";
import { ReactComponent as StrengthIcon } from "../assets/icons/basic-parameters/strength-icon.svg";
import { ReactComponent as AgilityIcon } from "../assets/icons/basic-parameters/agility-icon.svg";
import { ReactComponent as IntelligenceIcon } from "../assets/icons/basic-parameters/intelligence-icon.svg";
import { ReactComponent as CharismahIcon } from "../assets/icons/basic-parameters/charisma-icon.svg";
import { ReactComponent as LifeForceIcon } from "../assets/icons/extra-options/life-force-icon.svg";
import { ReactComponent as EvasionIcon } from "../assets/icons/extra-options/evasion-icon.svg";
import { ReactComponent as EnergyIcon } from "../assets/icons/extra-options/energy-icon.svg";
import { ReactComponent as AttackIcon } from "../assets/icons/skils/attack-icon.svg";
import { ReactComponent as StealthIcon } from "../assets/icons/skils/stealth-icon.svg";
import { ReactComponent as ArcheryIcon } from "../assets/icons/skils/archery-icon.svg";
import { ReactComponent as LearnabilityIcon } from "../assets/icons/skils/learnability-icon.svg";
import { ReactComponent as SurvivalIcon } from "../assets/icons/skils/survival-icon.svg";
import { ReactComponent as MedicineIcon } from "../assets/icons/skils/medicine-icon.svg";
import { ReactComponent as IntimidationIcon } from "../assets/icons/skils/intimidation-icon.svg";
import { ReactComponent as InsightIcon } from "../assets/icons/skils/insight-icon.svg";
import { ReactComponent as AppearanceIcon } from "../assets/icons/skils/appearance-icon.svg";
import { ReactComponent as ManipulationIcon } from "../assets/icons/skils/manipulation-icon.svg";

export const fields: IField[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Имя',
    placeholder: 'Введите имя',
  },
  {
    name: 'strength',
    type: 'number',
    label: 'Сила',
    placeholder: '',
  },
  {
    name: 'agility',
    type: 'number',
    label: 'Ловкость',
    placeholder: '',
  },
  {
    name: 'intellect',
    type: 'number',
    label: 'Интелект',
    placeholder: '',
  },
  {
    name: 'charisma',
    type: 'number',
    label: 'Харизма',
    placeholder: '',
  },
];

export const parameterOptions: IOptions = {
  strength: {
    text: 'Сила',
    Icon: StrengthIcon
  },
  agility: {
    text: 'Ловкость',
    Icon: AgilityIcon
  },
  intellect: {
    text: 'Интелект',
    Icon: IntelligenceIcon
  },
  charisma: {
    text: 'Харизма',
    Icon: CharismahIcon
  },
};

export const extraOptions: IOptions = {
  lifeForce: {
    text: 'Жизненная сила',
    Icon: LifeForceIcon
  },
  evasion: {
    text: 'Уклонение',
    Icon: EvasionIcon
  },
  energy: {
    text: 'Энергичность',
    Icon: EnergyIcon
  },
}

export const skillOptions: IOptions = {
  attack: {
    text: 'Атака',
    Icon: AttackIcon
  },
  stealth: {
    text: 'Стелс',
    Icon: StealthIcon
  },
  archery: {
    text: 'Стрельба из лука',
    Icon: ArcheryIcon
  },
  learnability: {
    text: 'Обучаемость',
    Icon: LearnabilityIcon
  },
  survival: {
    text: 'Выживание',
    Icon: SurvivalIcon
  },
  medicine: {
    text: 'Медицина',
    Icon: MedicineIcon
  },
  intimidation: {
    text: 'Запугивание',
    Icon: IntimidationIcon
  },
  insight: {
    text: 'Проницательность',
    Icon: InsightIcon
  },
  appearance: {
    text: 'Внешний вид',
    Icon: AppearanceIcon
  },
  manipulation: {
    text: 'Манипулирование',
    Icon: ManipulationIcon
  },
}

export const skillLevel = ['Нетренированный', 'Новичок', 'Ученик', 'Адепт', 'Эксперт', 'Мастер'];
