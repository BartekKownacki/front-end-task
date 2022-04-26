const addNewRecord = (record) => ({
  type: "ADD_NEW_RECORD",
  record,
});

const restoreRecords = (records) => ({
  type: "RESTORE_RECORDS",
  records,
});

const setUserData = (userData) => ({
  type: "SET_USER_DATA",
  userData,
});

export const AppActions = {
  addNewRecord,
  restoreRecords,
  setUserData,
};
