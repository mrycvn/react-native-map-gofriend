import { data } from "../../../data";

const INITIAL_STATE = {
  userList: data,
  login: "x",
  myLocation: {
    latitude: "39.98240487636441",
    longitude: "32.846174950898344",
  },
  profileCard: {
    name: "",
    surname: "",
    adress: "",
  },
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN":
      return { ...state, login: action.payload };
    case "ADD_NEW_RECORD":
      return { ...state, userList: [...state.userList, action.payload] };
    case "SAVE_INSTANT_LOCATİON":
      return {
        ...state,
        myLocation: {
          ...state.myLocation,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
    case "SAVE_PROFILE_CARD":
      return {
        ...state,
        profileCard: {
          ...state.profileCard,
          name: action.payload.name,
          surname: action.payload.surname,
          adress: action.payload.adress,
        },
      };
    default:
      return state;
  }
};
