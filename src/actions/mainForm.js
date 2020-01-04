export const changeDeparture = (departure) => {
  return {
    type: "CHANGE_DEPARTURE",
    departure
  };
};

export const changeStartDate = (startDate) => {
  return {
    type: "CHANGE_START_DATE",
    startDate
  };
};

export const changeEndDate = (endDate) => {
  return {
    type: "CHANGE_END_DATE",
    endDate
  };
};
