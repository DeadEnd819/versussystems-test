import { FC } from 'react'
import { Modal } from '../../ui'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  modalStack,
  closeModal,
  modalForAnimation,
  ModalName,
  addAnimation
} from '../../redux/slices/modals'
import { Import } from "../../ui";
import { CharacterForm, MessageModal } from "../index";
import { Components, Content } from '../../interfaces/common.d'
import './Modals.module.scss'

const Modals: FC = () => {
  const modals = useAppSelector(modalStack);
  const animModal = useAppSelector(modalForAnimation);
  const dispatch = useAppDispatch()

  const modalComponents: Components<ModalName, Content> = {
    [ModalName.IMPORT]: <Import />,
    [ModalName.CHARACTER_FORM]: <CharacterForm />,
    [ModalName.MESSAGE]: <MessageModal />
  } as const

  const handleModalClose = (modal: ModalName) => {
    dispatch(addAnimation(modal))

    setTimeout(() => {
      dispatch(closeModal(modal))
    }, 400);
  }

  return (
    <>
      {
        modals.length > 0 && modals.map((modal, i) =>
          <Modal
            key={modal}
            isClose={animModal === modal}
            isLast={modals.length - 1 === i}
            onlyOne={modals.length === 1}
            onClose={() => handleModalClose(modal)}
          >
            {modalComponents[modal]}
          </Modal>
        )
      }
    </>
  );
};

export default Modals;
