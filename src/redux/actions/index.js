export const UpdateLogin = (login) => {
  return { type: "CHANGE_LOGIN", payload: login };
};

export const AddNewRecord = (user) => {
  return { type: "ADD_NEW_RECORD", payload: user };
};

export const SetInstantLocation = (myLocation) => {
  return { type: "SAVE_INSTANT_LOCATİON", payload: myLocation };
};

export const AddProfileCard = (card) => {
  return { type: "SAVE_PROFILE_CARD", payload: card };
};
