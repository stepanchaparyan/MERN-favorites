import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  min-width: 200px;
`;

export const Input = styled.input`
  border: 0px;
  width: 200px;
  padding: 8px 10px;
  margin: 4px;
  outline: none;
  border-radius: 4px;

  &[type='submit'] {
    width: 50%;
    border: 0;
    background-color: ${props => props.theme.color};
    font-weight: 600;
    font-size: 16px;
    margin-top: 20px;
    border-radius: 5%;
    cursor: pointer;
    margin-bottom: 10px;
  }
  &[type='button'] {
    width: 70%;
    border: 0;
    background-color: ${props => props.theme.color};
    font-weight: 600;
    font-size: 16px;
    border-radius: 5%;
    cursor: pointer;
    margin: 10px;
  }
`;

export const InputHidden = styled.input`
  display: none;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const IconEdit = styled.img`
  width: 20px;
  height: 20px;
  padding: 16px 5px 0 0;
`;

export const Button = styled.button`
  width: 35%;
  border: 0;
  background-color: gray;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5%;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const LabelEdit = styled.label`
  cursor: pointer;
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  color: black;
  font-size: 21px;
  border: 1px black;
  background-color: lightgrey;
  border-radius: 3px;
  padding: 3px 6px 0 6px;
`;

export const Filename = styled.div`
  font-size: 12px;
  margin: 12px 0;
`;

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    width: '350px',
    height: '200px'
  }
};

export const ButtonConfirm = styled.button`
  border: 0;
  background-color: ${props => props.theme.color};
  font-weight: 600;
  font-size: 16px;
  border-radius: 5%;
  cursor: pointer;
  margin: 12px;
  padding: 8px;
`;

export const ButtonClose = styled.button`
  background-color: ${props => props.theme.color};
  border: 0;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5%;
  cursor: pointer;
  margin-right: 8px;
`;

export const ButtonCancel = styled.button`
  width: 30%;
  border: 0;
  background-color: lightgrey;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5%;
  cursor: pointer;
  margin: 12px;
  padding: 8px;
`;

export const ModalContainer = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
`;

export const ModalTitleContainer = styled.div`
  background-color: ${props => props.theme.color};
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.div`
  font-size: 20px;
  padding: 16px;
  font-weight: bold;
`;

export const ModalTextContainer = styled.div`
  display: flex;
  min-height: 80px;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid lightGray;
  width: 94%;
  margin: 0 3%;
`;
