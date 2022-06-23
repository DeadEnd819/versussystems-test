import { IParameters } from "../redux/slices/character";

export const getCurrentSkillValue = (
  skill: string,
  value: number,
  parameters: IParameters
) => {
  switch (skill) {
    case 'attack':
      return value < parameters.strength ?
        value : parameters.strength;
    case 'stealth':
    case 'archery':
      return value < parameters.agility ?
        value : parameters.agility;
    case 'learnability':
    case 'survival':
    case 'medicine':
      return value < parameters.intellect ?
        value : parameters.intellect
    case 'intimidation':
    case 'insight':
    case 'appearance':
    case 'manipulation':
      return value < parameters.charisma ?
        value : parameters.charisma
  }
};

export const getIsShowBtn = (
  skill: string,
  value: number,
  parameters: IParameters
) => {
  switch (skill) {
    case 'attack':
      return value < parameters.strength && value < 5;
    case 'stealth':
    case 'archery':
      return value < parameters.agility  && value < 5;
    case 'learnability':
    case 'survival':
    case 'medicine':
      return value < parameters.intellect  && value < 5
    case 'intimidation':
    case 'insight':
    case 'appearance':
    case 'manipulation':
      return value < parameters.charisma  && value < 5
  }
};
