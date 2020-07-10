import {
    GET_SYMPTOMS,
    GET_DIAGNOSIS,
    PROFILE_LOADING,
    GET_NEARBYDOCTORS,
   
  } from '../actions/types';
    
  const initialState = {
    symptomName: null,
    gender: null,
    year_of_birth: null,
    loading: false,
    latitude: null,
    longitude:null,
    searchText: '',

  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case PROFILE_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_SYMPTOMS:
        return {
          ...state,
          symptomName: action.payload,
          gender: action.payload,
          year_of_birth: action.payload,
          loading: false
        };
      case  GET_DIAGNOSIS:
        return {
          ...state,
          symptomName: action.payload,
          gender: action.payload,
          year_of_birth: action.payload,
          loading: false
        };
      case GET_NEARBYDOCTORS:
        return {
          ...state,
          latitude: action.payload,
          longitude: action.payload
        };
        case SEARCH_TEXT:
            return {
              ...state,
              searchText: action.payload,
              gender: action.payload,
              year_of_birth: action.payload,
              loading: false
            };
     
      default:
        return state;
    }
  }
  