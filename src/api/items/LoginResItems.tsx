export interface LoginResItems {
  token: string;
  user: UserInfo;
}

export interface UserInfo {
  fullName: string;
  phoneNumber?: string;
  isValid?: boolean;
  idNo: string;
  birthDay: string;
  gender: number;
  nationality: string;
  placeOfOrigin: string;
  placeOfResidence: string;
  personalIdentification: string;
  placeIssue: string;
  dateIssue: string;
  imageIdentityCardBack?: string;
  imageIdentityCardFront?: string;
  /** 1: mới tạo tk
   *  2: Đã lưu thông tin OCR
   *  4: Đã bị từ chối xác thực
   *  8: Đã được xác thực thành công
   *  32: Đã tạo chữ ký
   */
  stepVerify?: number;
  loginStepVerify?: number;
  originStepVerify?: number;
  isCreateDigitalSignature?: boolean;
  identityDateExpire?: string;
  email: string;
}