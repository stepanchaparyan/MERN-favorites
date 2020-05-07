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
  FILE_ERROR,
  SET_UPLOAD_PERSENTAGE,
  SET_MESSAGE,
  REMOVE_FILE
  // CLEAR_ERRORS,
  // FILTER_FAVITEM,
  // CLEAR_FILTER,
  // SEARCH_FAVITEM,
  // CLEAR_SEARCH,
  // SEARCH_FILTER_FAVITEM,
  // CLEAR_SEARCH_FILTER
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        error: null
      };
    // case ADD_FAVITEM:
    //   return {
    //     ...state,
    //     favItems: [...state.favItems, payload],
    //     loading: false
    //   };
    // case REMOVE_FAVITEM:
    //   return {
    //     ...state,
    //     favItems: state.favItems.filter(favItem => favItem._id !== payload)
    //   };
    case EDIT_PROFILE:
      return {
        ...state,
        editProfile: payload,
        loading: false
      };
    // case CLEAR_EDIT:
    //   return {
    //     ...state,
    //     editFavItem: null
    //   };
    case TOGGLE_FORM:
      return {
        ...state,
        toggleForm: payload,
        error: null
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: state.profile.map(profile => (profile._id === payload._id ? payload : profile)),
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload
      };

    case UPDATE_FILE:
      return {
        ...state,
        uploadedFile: payload
      };
    case FILE_ERROR:
      return {
        ...state,
        error: payload
      };
    case REMOVE_FILE:
      return {
        ...state,
        uploadedFile: null
      };

    case SET_UPLOAD_PERSENTAGE:
      return {
        ...state,
        uploadPercentage: payload
      };

    case SET_MESSAGE:
      return {
        ...state,
        message: payload
      };
    // case CLEAR_ERRORS:
    //   return {
    //     ...state,
    //     error: null
    //   };
    // case FILTER_FAVITEM:
    //   return {
    //     ...state,
    //     filterFavItems: state.favItems.filter(favItem => favItem.category === payload)
    //   };
    // case CLEAR_FILTER:
    //   return {
    //     ...state,
    //     filterFavItems: null
    //   };
    // case SEARCH_FAVITEM:
    //   const regex = new RegExp(`${payload}`, 'gi');
    //   return {
    //     ...state,
    //     searchFavItem: state.favItems.filter(favItem => favItem.title.match(regex))
    //   };
    // case CLEAR_SEARCH:
    //   return {
    //     ...state,
    //     searchFavItem: null
    //   };
    // case SEARCH_FILTER_FAVITEM:
    //   const regexp = new RegExp(`${payload[0]}`, 'gi');
    //   return {
    //     ...state,
    //     searchFilterFavItems: state.favItems
    //       .filter(favItem => favItem.title.match(regexp))
    //       .filter(favItem => favItem.category === payload[1])
    //   };
    // case CLEAR_SEARCH_FILTER:
    //   return {
    //     ...state,
    //     searchFilterFavItems: null
    //   };
    default:
      return state;
  }
};