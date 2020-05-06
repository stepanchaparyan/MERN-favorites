import React, { useState, useContext, useEffect } from 'react';
import Progress from './Progress';
import ProfileContext from '../../../context/profileContext/profileContext';
import {
  Container,
  Input,
  InputHidden,
  ProfileImage,
  LabelEdit,
  LabelUpload,
  IconEdit,
  Filename,
  customStyles,
  ButtonConfirm,
  ButtonClose,
  ButtonCancel,
  ModalContainer,
  ModalTitleContainer,
  ModalTitle,
  ModalTextContainer,
  ModalButtonsContainer
} from './FileUploadStyled';
import EditIcon from '../../../assets/icon-edit.png';
import UploadIcon from '../../../assets/icon-upload.png';
import Modal from 'react-modal';

const FileUpload = () => {
  const context = useContext(ProfileContext);
  const {
    updateProfile,
    editProfile,
    update_File,
    uploadedFile,
    remove_file,
    uploadPercentage
  } = context;

  const [newProfile, setProfile] = useState(editProfile);

  useEffect(() => {
    setProfile(editProfile);
  }, []);

  const { image } = newProfile;
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    update_File(formData);
  };

  const setImage = () => {
    setProfile({
      ...newProfile,
      image: filename
    });
    openModal(true);
  };

  const onConfirm = () => {
    updateProfile(newProfile);
    remove_file();
    setFilename(null);
    setIsOpen(false);
  };

  Modal.setAppElement('#root');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProfile({
      ...newProfile,
      image: editProfile.image
    });
    remove_file();
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <ProfileImage src={require(`../../../assets/${image}`)} />
        <LabelEdit htmlFor="file-edit">
          <IconEdit src={EditIcon}></IconEdit>
        </LabelEdit>
        <InputHidden id="file-edit" type="file" onChange={onChange} />
        <Filename>{filename}</Filename>

        {filename && !uploadedFile && (
          <>
            <Progress percentage={uploadPercentage} />
            <LabelUpload htmlFor="file-upload">
              <IconEdit src={UploadIcon}></IconEdit>Upload
            </LabelUpload>
            <InputHidden id="file-upload" type="submit" />
          </>
        )}
      </form>
      {uploadedFile && <Input type="button" value="Update Image" onClick={setImage} />}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <ModalContainer>
          <ModalTitleContainer>
            <ModalTitle>Confirm</ModalTitle>
            <ButtonClose onClick={closeModal}>X</ButtonClose>
          </ModalTitleContainer>
          <ModalTextContainer>Please confirm, if you want to change your image</ModalTextContainer>
          <ModalButtonsContainer>
            <ButtonConfirm onClick={onConfirm}>Confirm</ButtonConfirm>
            <ButtonCancel onClick={closeModal}>Cancel</ButtonCancel>
          </ModalButtonsContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default FileUpload;
