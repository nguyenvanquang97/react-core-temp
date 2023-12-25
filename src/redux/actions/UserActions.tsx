import { Action } from "redux";
import { UserInfo } from "../../api/items/LoginResItems";

export const SET_USER_INFO = "SET_USER_INFO";
export const CLEAR_USER_INFO = "CLEAR_USER_INFO";
export const SET_TOKEN = "SET_TOKEN";
export const UPDATE_STEP_VERIFY = "UPDATE_STEP_VERIFY";
export const UPDATE_PHONE_NUMBER = "UPDATE_PHONE_NUMBER";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";
export const UPDATE_LOGIN_STEP_VERIFY = "UPDATE_LOGIN_STEP_VERIFY";
export const UPDATE_CREATED_SIGNATURE = "UPDATE_CREATED_SIGNATURE";
export const UPDATE_FRONT_IMAGE = "UPDATE_FRONT_IMAGE";
export const UPDATE_BACK_IMAGE = "UPDATE_BACK_IMAGE";

export interface SetUserInfoAction {
  type: typeof SET_USER_INFO;
  payload: {
    userInfo: UserInfo;
    token: string;
    isFromLogin: boolean;
  };
}

export interface ClearUserInfoAction extends Action<typeof CLEAR_USER_INFO> {}

export interface SetTokenAction {
  type: typeof SET_TOKEN;
  payload: string;
}

export interface UpdateStepVerifyAction {
  type: typeof UPDATE_STEP_VERIFY;
  payload: number;
}

export interface UpdatePhoneNumberAction {
  type: typeof UPDATE_PHONE_NUMBER;
  payload: string;
}

export interface UpdateUserInfoAction {
  type: typeof UPDATE_USER_INFO;
  payload: {
    phoneNumber: string;
    isValid: boolean;
    stepVerify: number;
    fullName: string;
    email: string;
  };
}

export interface UpdateLoginStepVerifyAction {
  type: typeof UPDATE_LOGIN_STEP_VERIFY;
  payload: number;
}

export interface UpdateCreatedSignatureAction
  extends Action<typeof UPDATE_CREATED_SIGNATURE> {}

export interface UpdateFrontImageAction {
  type: typeof UPDATE_FRONT_IMAGE;
  payload: string;
}
export interface UpdateBackImageAction {
  type: typeof UPDATE_BACK_IMAGE;
  payload: string;
}

export const setUser = (
  userInfo: UserInfo,
  token: string,
  isFromLogin: boolean
): SetUserInfoAction => ({
  type: SET_USER_INFO,
  payload: { userInfo, token, isFromLogin },
});

export const clearUser = (): ClearUserInfoAction => ({
  type: CLEAR_USER_INFO,
});

export const setToken = (token: string): SetTokenAction => ({
  type: SET_TOKEN,
  payload: token,
});

export const updateStepVerify = (
  newStepVerify: number
): UpdateStepVerifyAction => ({
  type: UPDATE_STEP_VERIFY,
  payload: newStepVerify,
});

export const updatePhoneNumber = (
  newPhone: string
): UpdatePhoneNumberAction => ({
  type: UPDATE_PHONE_NUMBER,
  payload: newPhone,
});

export const updateUserInfo = (
  phoneNumber: string,
  isValid: boolean,
  stepVerify: number,
  fullName: string,
  email: string
): UpdateUserInfoAction => ({
  type: UPDATE_USER_INFO,
  payload: { phoneNumber, isValid, stepVerify, fullName, email },
});

export const updateLoginStepVerify = (
  newLoginStepVerify: number
): UpdateLoginStepVerifyAction => ({
  type: UPDATE_LOGIN_STEP_VERIFY,
  payload: newLoginStepVerify,
});

export const updateCreatedSignature = (): UpdateCreatedSignatureAction => ({
  type: UPDATE_CREATED_SIGNATURE,
});

export const updateFrontImage = (image: string): UpdateFrontImageAction => ({
  type: UPDATE_FRONT_IMAGE,
  payload: image,
});

export const updateBackImage = (image: string): UpdateBackImageAction => ({
  type: UPDATE_BACK_IMAGE,
  payload: image,
});
