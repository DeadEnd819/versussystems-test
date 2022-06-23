import { FC } from 'react'
import cx from 'classnames'
import { useBodyScrollLock, useKeyPress } from '../../helpers'
import { Btn } from '../index'
import { Portal } from '../../components';
import { ReactComponent as CloseIcon } from '../../assets/icons/other/close-icon.svg'
import { IModalWrapper } from './Modal.d'
import styles from './Modal.module.scss'

const Modal: FC<IModalWrapper> = ({
  className= '',
  children,
  isLast,
  isClose = false,
  onlyOne,
  onClose
}) => {
  useKeyPress('Escape', onClose, isLast);
  useBodyScrollLock(onlyOne);

  const modalClassName = cx(
    styles.modal,
    {
      [className]: className,
      [styles.isClose]: isClose
    }
  );

  return (
    <Portal selector={'#modal-root'}>
      <div className={modalClassName}>
        <div className={styles.wrapper}>
          <div
            className={styles.overlay}
            tabIndex={-1}
            role="button"
            onClick={onClose}
            onKeyDown={onClose}
          />
          <div className={styles.content}>
            { children }

            <Btn
              className={styles.closeBtn}
              isIcon
              onClick={onClose}
            >
              <CloseIcon width={16} height={16} />
            </Btn>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
