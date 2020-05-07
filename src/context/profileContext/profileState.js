import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProfileContext from './profileContext';
import ProfileReducer from './profileReducer';
import {
  // REMOVE_FAVITEM,
  // ADD_FAVITEM,
  EDIT_PROFILE,
  // CLEAR_EDIT,
  UPDATE_PROFILE,
  GET_PROFILE,
  PROFILE_ERROR,
  TOGGLE_FORM,
  UPDATE_FILE,
  REMOVE_FILE,
  FILE_ERROR,
  SET_UPLOAD_PERSENTAGE,
  SET_MESSAGE
  // CLEAR_ERRORS,
  // CLEAR_FILTER,
  // CLEAR_SEARCH_FILTER
} from '../types';

const ProfileState = props => {
  const intialState = {
    editProfile: null,
    loading: true,
    profile: [],
    error: null,
    toggleForm: false,
    uploadedFile: null,
    uploadPercentage: 0,
    message: null
  };
  const [state, dispatch] = useReducer(ProfileReducer, intialState);

  // get favItems
  const getProfile = async () => {
    try {
      const res = await axios.get('/profile');
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  // Add FavItem
  // const addFavItem = async favItem => {
  //   const config = {
  //     'Content-Type': 'application/json'
  //   };
  //   try {
  //     const res = await axios.post('/favItem/add', favItem, config);
  //     dispatch({
  //       type: ADD_FAVITEM,
  //       payload: res.data
  //     });
  //     dispatch({
  //       type: TOGGLE_FORM,
  //       payload: !state.toggleForm
  //     });
  //     dispatch({
  //       type: CLEAR_ERRORS
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: FAVITEM_ERROR,
  //       payload: err.response.data.errors
  //     });
  //   }
  // };

  // Update profile
  const updateProfile = async profile => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put('/profile/update', profile, config);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
      getProfile();
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  const edit_Profile = profile => {
    dispatch({
      type: EDIT_PROFILE,
      payload: profile
    });
  };

  // const clearEdit = () => {
  //   dispatch({
  //     type: CLEAR_EDIT
  //   });
  // };
  // const clearErrors = () => {
  //   dispatch({
  //     type: CLEAR_ERRORS
  //   });
  // };

  const toggle_Form = () => {
    dispatch({
      type: TOGGLE_FORM,
      payload: !state.toggleForm
    });
  };

  const set_uploadPercentage = progress => {
    dispatch({
      type: SET_UPLOAD_PERSENTAGE,
      payload: progress
    });
  };

  const set_message = message => {
    dispatch({
      type: SET_MESSAGE,
      payload: message
    });
  };

  const update_File = async formData => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: progressEvent => {
        const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
        set_uploadPercentage(progress);
        if (progress === 100) {
          setTimeout(() => set_uploadPercentage(0), 3000);
        }
      }
    };
    try {
      const res = await axios.post('/upload', formData, config);
      dispatch({
        type: UPDATE_FILE,
        payload: res.data
      });
      set_message('File Uploaded');
      setTimeout(() => set_message(null), 10000);
    } catch (err) {
      dispatch({
        type: FILE_ERROR,
        payload: err.response.data.errors
      });
      if (err.response.status === 500) {
        set_message('There was a problem with the server');
      } else {
        set_message(err.response.data.msg);
      }
    }
  };

  const remove_file = () => {
    dispatch({
      type: REMOVE_FILE
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        error: state.error,
        loading: state.loading,
        editProfile: state.editProfile,
        toggleForm: state.toggleForm,
        uploadedFile: state.uploadedFile,
        uploadPercentage: state.uploadPercentage,
        message: state.message,
        // addFavItem,
        // clearEdit,
        toggle_Form,
        edit_Profile,
        updateProfile,
        // clearErrors,
        getProfile,
        update_File,
        remove_file,
        set_uploadPercentage,
        set_message
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

ProfileState.propTypes = {
  children: PropTypes.object
};

export default ProfileState;
