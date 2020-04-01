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

export default (state, { type, payload }) => {
  switch (type) {
    case GET_FAVITEMS:
      return {
        ...state,
        favItems: payload,
        loading: false,
        error: null
      };
    case ADD_FAVITEM:
      return {
        ...state,
        favItems: [...state.favItems, payload],
        loading: false
      };
    case REMOVE_FAVITEM:
      return {
        ...state,
        favItems: state.favItems.filter(favItem => favItem._id !== payload)
      };
    case EDIT_FAVITEM:
      return {
        ...state,
        editFavItem: payload
      };
    case CLEAR_EDIT:
      return {
        ...state,
        editFavItem: null
      };
    case TOGGLE_FORM:
      return {
        ...state,
        toggleForm: payload
      };
    case UPDATE_FAVITEM:
      return {
        ...state,
        favItems: state.favItems.map(favItem => (favItem._id === payload._id ? payload : favItem))
      };
    case FAVITEM_ERROR:
      return {
        ...state,
        error: payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
