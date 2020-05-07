import React from 'react';
import PropTypes from 'prop-types';
import {
  customStyles,
  ButtonConfirm,
  ButtonClose,
  ButtonCancel,
  ModalContainer,
  ModalTitleContainer,
  ModalTitle,
  ModalTextContainer,
  ModalButtonsContainer
} from './ModalStyled';
import Modal from 'react-modal';

const CustomModal = ({
  modalIsOpen,
  closeModal,
  onConfirm,
  title,
  text,
  buttonConfirmText,
  buttonCancelText
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <ModalContainer>
        <ModalTitleContainer>
          <ModalTitle>{title}</ModalTitle>
          <ButtonClose onClick={closeModal}>X</ButtonClose>
        </ModalTitleContainer>
        <ModalTextContainer>{text}</ModalTextContainer>
        <ModalButtonsContainer>
          <ButtonConfirm onClick={onConfirm}>{buttonConfirmText}</ButtonConfirm>
          <ButtonCancel onClick={closeModal}>{buttonCancelText}</ButtonCancel>
        </ModalButtonsContainer>
      </ModalContainer>
    </Modal>
  );
};

CustomModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonConfirmText: PropTypes.string,
  buttonCancelText: PropTypes.string
};

CustomModal.defaultProps = {
  title: 'Confirm',
  text: 'Please confirm, if you want to change your image',
  buttonConfirmText: 'Confirm',
  buttonCancelText: 'Cancel'
};

export default CustomModal;
