const addNewRecord = (record) => ({
  type: 'ADD_NEW_RECORD',
  record,
});

const restoreRecords = (records) => ({
  type: 'RESTORE_RECORDS',
  records,
});

const setUserData = (userData) => ({
  type: 'SET_USER_DATA',
  userData,
});

const setSearchLocationData = (searchLocationData) => ({
  type: 'SET_SEARCH_LOCATION_DATA',
  searchLocationData,
});

const setLoading = (isLoading) => ({
  type: 'SET_LOADING',
  isLoading,
});

const setDefaultSeachValue = (defaultSearchValue) => ({
  type: 'SET_DEFAULT_SEARCH_VALUE',
  defaultSearchValue,
});

export const AppActions = {
  addNewRecord,
  restoreRecords,
  setUserData,
  setSearchLocationData,
  setLoading,
  setDefaultSeachValue,
};
