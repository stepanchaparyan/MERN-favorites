import React, { useState, useContext, useEffect } from 'react';
import Progress from '../../Progress/Progress';
import ProfileContext from '../../../context/profileContext/profileContext';
import {
  Container,
  Input,
  InputHidden,
  ProfileImage,
  LabelEdit,
  LabelUpload,
  IconEdit,
  Filename
} from './FileUploadStyled';
import EditIcon from '../../../assets/icon-edit.png';
import UploadIcon from '../../../assets/icon-upload.png';
import Modal from 'react-modal';
import CustomModal from '../../Modal/Modal';

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

  Modal.setAppElement('#root');
  const [newProfile, setProfile] = useState(editProfile);
  const { image } = newProfile;
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setProfile(editProfile);
  }, []);

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
      <CustomModal
        closeModal={closeModal}
        onConfirm={onConfirm}
        modalIsOpen={modalIsOpen}
      ></CustomModal>
    </Container>
  );
};

export default FileUpload;
