import { appInitialState } from './app.initialState';

let initState = { ...appInitialState };

export function app(state = initState, action) {
  switch (action.type) {
    case 'ADD_NEW_RECORD':
      return {
        ...state,
        previousSearches: [...state.previousSearches, action.record],
      };
    case 'RESTORE_RECORDS':
      return {
        ...state,
        //TODO CHECK
        previousSearches: action.records.filter((item) => item.length > 0),
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.userData,
      };
    case 'SET_SEARCH_LOCATION_DATA':
      return {
        ...state,
        searchedLocation: action.searchLocationData,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case 'SET_DEFAULT_SEARCH_VALUE':
      return {
        ...state,
        defaultSearchValue: action.defaultSearchValue,
      };

    default:
      return state;
  }
}
