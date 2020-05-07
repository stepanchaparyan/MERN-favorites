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
  buttonConfirm,
  buttonCancel
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
          <ButtonConfirm onClick={onConfirm}>{buttonConfirm}</ButtonConfirm>
          <ButtonCancel onClick={closeModal}>{buttonCancel}</ButtonCancel>
        </ModalButtonsContainer>
      </ModalContainer>
    </Modal>
  );
};

CustomModal.propTypes = {
  modalIsOpen: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonConfirm: PropTypes.string,
  buttonCancel: PropTypes.string
};

CustomModal.defaultProps = {
  title: 'Confirm',
  text: 'Please confirm, if you want to change your image',
  buttonConfirm: 'Confirm',
  buttonCancel: 'Cancel'
};

export default CustomModal;
