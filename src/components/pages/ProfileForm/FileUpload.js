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
  const [modalType, setModalType] = useState(null);
  const [filename, setFilename] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setProfile(editProfile);
  }, []);

  const onChange = e => {
    if (e.target.files[0].type === 'image/jpeg' || e.target.files[0] === 'image/png') {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    } else {
      setIsOpen(true);
      setModalType('fileType');
    }
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
    setIsOpen(true);
    setModalType('confirm');
  };

  const onConfirm = () => {
    updateProfile(newProfile);
    remove_file();
    setFilename(null);
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProfile({
      ...newProfile,
      image: editProfile.image
    });
    remove_file();
  };

  const closeFileTypeModal = () => {
    setIsOpen(false);
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
        {modalType === 'fileType' && (
          <CustomModal
            closeModal={closeFileTypeModal}
            modalIsOpen={modalIsOpen}
            buttonConfirmText={null}
            buttonCancelText="OK"
            title="Wrong extension"
            text="Wrong extension of uploading file, please choose .jpg or .png format"
            titleBgColor="indianred"
            cancelButtonColor="cadetblue"
          ></CustomModal>
        )}
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
      {modalType === 'confirm' && (
        <CustomModal
          closeModal={closeModal}
          onConfirm={onConfirm}
          modalIsOpen={modalIsOpen}
          title="Confirm"
          text="Please, confirm if you want to change your image"
        ></CustomModal>
      )}
    </Container>
  );
};

export default FileUpload;
