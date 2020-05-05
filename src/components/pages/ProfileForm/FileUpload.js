import React, { useState, useContext, useEffect } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
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
  const { updateProfile, editProfile } = context;
  const [newProfile, setProfile] = useState(editProfile);

  useEffect(() => {
    setProfile(editProfile);
  }, []);

  const { image } = newProfile;
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  const setImagePath = () => {
    setProfile({
      ...newProfile,
      image: filename
    });
    openModal(true);
  };

  const onChangePath = () => {
    updateProfile(newProfile);
  };

  Modal.setAppElement('#root');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      {message ? <Message msg={message} /> : null}

      <form onSubmit={onSubmit}>
        <ProfileImage src={require(`../../../assets/${image}`)} />
        <LabelEdit htmlFor="file-edit">
          <IconEdit src={EditIcon}></IconEdit>
        </LabelEdit>
        <InputHidden id="file-edit" type="file" onChange={onChange} />
        <Filename>{filename}</Filename>

        {filename && (
          <>
            <Progress percentage={uploadPercentage} />
            <LabelUpload htmlFor="file-upload">
              <IconEdit src={UploadIcon}></IconEdit>Upload
            </LabelUpload>
            <InputHidden id="file-upload" type="submit" />
          </>
        )}
      </form>
      {uploadedFile && <Input type="button" value="Update Image" onClick={setImagePath} />}
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
          <ModalTextContainer></ModalTextContainer>
          <ModalButtonsContainer>
            <ButtonConfirm onClick={onChangePath}>Confirm</ButtonConfirm>
            <ButtonCancel onClick={closeModal}>Cancel</ButtonCancel>
          </ModalButtonsContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default FileUpload;
