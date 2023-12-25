import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  KEY_FIRST_LOAD: 'isFirstTimeLoadApp',
  LOGIN_WITH_BIOMETRIC: 'isLoginWithBiometric',
  USERNAME: 'USERNAME',
  PASSWORD: 'PASSWORD',
  IDCARD_INFO: (phone: string) => `idcard_info_${phone}`,

  getItem: async <T,>(key: string): Promise<T | null> => {
    try {
      const result = await AsyncStorage.getItem(key);
      if (result !== null) {
        return JSON.parse(result) as T;
      } else {
        return null;
      }
    } catch (e) {
      throw e;
    }
  },

  setItem: async <T,>(key: string, value: T): Promise<void> => {
    try {
      const item = JSON.stringify(value);
      return await AsyncStorage.setItem(key, item);
    } catch (e) {
      throw e;
    }
  },
};
