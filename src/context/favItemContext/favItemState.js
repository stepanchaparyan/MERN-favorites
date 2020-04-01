import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FavItemContext from './favItemContext';
import favItemReducer from './favItemReducer';
import {
  REMOVE_FAVITEM,
  ADD_FAVITEM,
  EDIT_FAVITEM,
  CLEAR_EDIT,
  UPDATE_FAVITEM,
  GET_FAVITEMS,
  FAVITEM_ERROR,
  TOGGLE_FORM,
  CLEAR_ERRORS
} from '../types';

const FavItemState = props => {
  const intialState = {
    editFavItem: null,
    loading: true,
    favItems: [],
    error: null,
    toggleForm: false
  };
  const [state, dispatch] = useReducer(favItemReducer, intialState);

  // get favItems
  const getFavItems = async () => {
    try {
      const res = await axios.get('/favItem');
      console.log(res.data);
      dispatch({
        type: GET_FAVITEMS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FAVITEM_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  // Add FavItem
  const addFavItem = async favItem => {
    const config = {
      'Content-Type': 'application/json'
    };
    try {
      const res = await axios.post('/favItem/add', favItem, config);
      dispatch({
        type: ADD_FAVITEM,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FAVITEM_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  // remove favItem
  const removeFavItem = async id => {
    try {
      await axios.delete(`/favItem/${id}`);
      dispatch({
        type: REMOVE_FAVITEM,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: FAVITEM_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  // toggleForm
  const toggle_Form = () => {
    dispatch({
      type: TOGGLE_FORM,
      payload: !state.toggleForm
    });
  };

  // update favItem
  const update_FavItem = async favItem => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(`/favItem/update/${favItem._id}`, favItem, config);
      dispatch({
        type: UPDATE_FAVITEM,
        payload: res.data
      });
      getFavItems();
    } catch (err) {
      dispatch({
        type: FAVITEM_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  // Edit Guest
  const edit_FavItem = favItem => {
    dispatch({
      type: EDIT_FAVITEM,
      payload: favItem
    });
  };
  const clearEdit = () => {
    dispatch({
      type: CLEAR_EDIT
    });
  };
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS
    });
  };

  return (
    <FavItemContext.Provider
      value={{
        favItems: state.favItems,
        editFavItem: state.editFavItem,
        error: state.error,
        loading: state.loading,
        toggleForm: state.toggleForm,
        addFavItem,
        removeFavItem,
        edit_FavItem,
        clearEdit,
        toggle_Form,
        update_FavItem,
        clearErrors,
        getFavItems
      }}
    >
      {props.children}
    </FavItemContext.Provider>
  );
};

FavItemState.propTypes = {
  children: PropTypes.object
};

export default FavItemState;
