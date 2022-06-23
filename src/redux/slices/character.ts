import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { getCurrentSkillValue } from "../../utils";

export interface IParameters {
  strength: number
  agility: number
  intellect: number
  charisma: number
  lifeForce: number
  evasion: number
  energy: number
}

export interface ISkills {
  attack: number
  stealth: number
  archery: number
  learnability: number
  survival: number
  medicine: number
  intimidation: number
  insight: number
  appearance: number
  manipulation: number
}

export interface ICharacter {
  name: string
  parameters: IParameters
  skills: ISkills
}

export interface ICharacterState {
  currentCharacter: ICharacter
}

export const initialState: ICharacterState = {
  currentCharacter: {
    name: 'Name',
    parameters: {
      strength: 0,
      agility: 0,
      intellect: 0,
      charisma: 0,

      lifeForce: 3,
      evasion: 10,
      energy: 0
    },
    skills: {
      attack: 0,
      stealth: 0,
      archery: 0,
      learnability: 0,
      survival: 0,
      medicine: 0,
      intimidation: 0,
      insight: 0,
      appearance: 0,
      manipulation: 0,
    }
  },
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    create: (state, action) => {
      const { name, parameters } = action.payload;
      let skills = {} as ISkills;

      Object.keys(state.currentCharacter.skills)
        .forEach((skill) => skills = { ...skills, ...{ [skill]: 0 } })

      const current = {
        name,
        parameters: {
          ...parameters,
          lifeForce: 3 + parameters.strength,
          evasion: 10 + parameters.agility,
          energy: parameters.agility + parameters.intellect
        },
        skills
      }

      state.currentCharacter = { ...state.currentCharacter, ...current };
    },
    importCharacter: (state, { payload }) => {
      state.currentCharacter = payload;
    },
    addLevelSkill: (state, action) => {
      const [ skill, value ] = Object.entries(action.payload)[0];
      const { parameters } = state.currentCharacter;

      const currentSkill = {
        [skill as unknown as string]:
          getCurrentSkillValue(skill as unknown as string, value as unknown as number, parameters)
      }

      state.currentCharacter.skills = {...state.currentCharacter.skills, ...currentSkill};
    },
    addDamage: (state) => {
      const life = state.currentCharacter.parameters.lifeForce;
      state.currentCharacter.parameters.lifeForce = life - 1 > 0 ? life - 1 : 0;
    }
  }
})

export const { create, addLevelSkill, addDamage, importCharacter } = characterSlice.actions

export const currentCharacter = createSelector(
  (state: RootState) => state.character,
  (character) => character.currentCharacter
)

export default characterSlice.reducer
