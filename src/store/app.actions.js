const addNewRecord = (record) => ({
  type: "ADD_NEW_RECORD",
  record,
});

const restoreRecords = (records) => ({
  type: "RESTORE_RECORDS",
  records,
});

export const AppActions = {
  addNewRecord,
  restoreRecords,
};
