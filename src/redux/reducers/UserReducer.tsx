import { Reducer } from "redux";
import { UserInfo } from "../../api/items/LoginResItems";
import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
  SetUserInfoAction,
  ClearUserInfoAction,
  UPDATE_STEP_VERIFY,
  UPDATE_LOGIN_STEP_VERIFY,
  UpdateStepVerifyAction,
  SetTokenAction,
  SET_TOKEN,
  UPDATE_CREATED_SIGNATURE,
  UpdateCreatedSignatureAction,
  UpdateFrontImageAction,
  UpdateBackImageAction,
  UPDATE_FRONT_IMAGE,
  UPDATE_BACK_IMAGE,
  UpdateLoginStepVerifyAction,
  UpdatePhoneNumberAction,
  UPDATE_PHONE_NUMBER,
  UpdateUserInfoAction,
  UPDATE_USER_INFO,
} from "../actions/UserActions";

interface UserState {
  userInfo: UserInfo | null;
  token: string | null;
}

const initialState: UserState = {
  userInfo: {
    fullName: "",
    phoneNumber: "",
    isValid: false,
    idNo: "",
    birthDay: "",
    gender: 1,
    nationality: "",
    placeOfOrigin: "",
    placeOfResidence: "",
    personalIdentification: "",
    placeIssue: "",
    dateIssue: "",
    imageIdentityCardBack: "",
    imageIdentityCardFront: "",
    stepVerify: 1,
    originStepVerify: 1,
    loginStepVerify: 1,
    isCreateDigitalSignature: false,
    identityDateExpire: "",
    email: "",
  },
  token: null,
};

const userReducer: Reducer<
  UserState,
  | SetUserInfoAction
  | ClearUserInfoAction
  | SetTokenAction
  | UpdateStepVerifyAction
  | UpdateLoginStepVerifyAction
  | UpdateCreatedSignatureAction
  | UpdateFrontImageAction
  | UpdateBackImageAction
  | UpdatePhoneNumberAction
  | UpdateUserInfoAction
> = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      const userInfo = action.payload.userInfo;
      const token = action.payload.token;
      if (action.payload.isFromLogin) {
        userInfo.loginStepVerify = userInfo.stepVerify;
        userInfo.originStepVerify = userInfo.stepVerify;
      }
      return {
        ...state,
        userInfo,
        token,
      };
    case CLEAR_USER_INFO:
      return initialState;
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case UPDATE_STEP_VERIFY:
      if (state.userInfo) {
        const updatedUserInfo: UserInfo = {
          ...state.userInfo,
          stepVerify: action.payload,
        };
        return {
          ...state,
          userInfo: updatedUserInfo,
          stepVerify: action.payload,
        };
      }
      return {
        ...state,
        stepVerify: action.payload,
      };
    case UPDATE_PHONE_NUMBER:
      if (state.userInfo) {
        const updatedUserInfo: UserInfo = {
          ...state.userInfo,
          phoneNumber: action.payload,
        };

        return {
          ...state,
          userInfo: updatedUserInfo,
          phoneNumber: action.payload,
        };
      }
      return {
        ...state,
        phoneNumber: action.payload,
      };

    case UPDATE_USER_INFO:
      if (state.userInfo) {
        const updatedUserInfo: UserInfo = {
          ...state.userInfo,
          phoneNumber: action.payload.phoneNumber,
          isValid: action.payload.isValid,
          stepVerify: action.payload.stepVerify,
          fullName: action.payload.fullName,
          email: action.payload.email,
        };

        return {
          ...state,
          userInfo: updatedUserInfo,
        };
      }
      return {
        ...state,
        phoneNumber: action.payload.phoneNumber,
        isValid: action.payload.isValid,
        stepVerify: action.payload.stepVerify,
        fullName: action.payload.fullName,
        email: action.payload.email,
      };

    case UPDATE_LOGIN_STEP_VERIFY:
      if (state.userInfo) {
        const updatedUserInfo: UserInfo = {
          ...state.userInfo,
          loginStepVerify: action.payload,
        };
        return {
          ...state,
          userInfo: updatedUserInfo,
          loginStepVerify: action.payload,
        };
      }
      return {
        ...state,
        loginStepVerify: action.payload,
      };
    case UPDATE_FRONT_IMAGE:
      if (state.userInfo) {
        const updatedUserInfo: UserInfo = {
          ...state.userInfo,
          imageIdentityCardFront: action.payload,
        };
        return {
          ...state,
          userInfo: updatedUserInfo,
          imageIdentityCardFront: action.payload,
        };
      }
      return {
        ...state,
        imageIdentityCardFront: action.payload,
      };
    case UPDATE_BACK_IMAGE:
      if (state.userInfo) {
        const updatedUserInfo: UserInfo = {
          ...state.userInfo,
          imageIdentityCardBack: action.payload,
        };
        return {
          ...state,
          userInfo: updatedUserInfo,
          imageIdentityCardBack: action.payload,
        };
      }
      return {
        ...state,
        imageIdentityCardBack: action.payload,
      };
    case UPDATE_CREATED_SIGNATURE:
      if (state.userInfo) {
        const updatedUserInfo: UserInfo = {
          ...state.userInfo,
          isCreateDigitalSignature: true,
        };
        return {
          ...state,
          userInfo: updatedUserInfo,
        };
      }

    default:
      return state;
  }
};

export default userReducer;
