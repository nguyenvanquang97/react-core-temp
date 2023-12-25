import {useMutation} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';
import {useAppNavigation} from '../../App';
import {clearUser} from '../redux/actions/UserActions';
import {RootState} from '../redux/store';
import {BaseResponse} from './BaseResponse';

interface BaseDAProps {
  url: string;
  method: 'GET' | 'POST';
  obj: any;
  formData?: FormData;
}

export const useBaseDA = <T,>() => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const navigation = useAppNavigation();

  const {mutateAsync, isLoading} = useMutation<
    BaseResponse<T>,
    Error,
    BaseDAProps
  >(
    async ({url, method, obj, formData}: BaseDAProps) => {
      const requestOptions: RequestInit = {
        method,
        headers: {
          'Content-Type':
            method === 'POST' && formData
              ? 'multipart/form-data'
              : 'application/json',
          Authorization: userState?.token
            ? `Bearer ${userState?.token ?? ''}`
            : '',
        },
      };

      logInfo(method, url, requestOptions, formData, obj);

      if (method === 'POST' && obj) {
        requestOptions.body = JSON.stringify(obj);
      }

      if (method === 'POST' && formData) {
        requestOptions.body = formData;
      }

      const response = await fetch(`${url}`, requestOptions);

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const responseData: BaseResponse<T> = await response.json();

      logResInfo<T>(method, url, response, formData, obj, responseData);

      if (response.status != 200) {
        if (response.status == 401 || response.status == 403) {
          dispatch(clearUser());
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }
        responseData.code = response.status;
        responseData.message = `Đã có lỗi xảy ra${
          response.statusText.length > 0 ?? false
            ? `: ${response.statusText}`
            : responseData.code == 408
            ? ': Không kết nối được tới hệ thống'
            : ''
        }`;
        return responseData;
      }

      return responseData;
    },
    {
      onError: error => {
        console.error('Error in useMutation:', error);
      },
    },
  );

  return {mutateAsync, isLoading};
};

function logResInfo<T>(
  method: string,
  url: string,
  response: Response,
  formData: FormData | undefined,
  obj: any,
  responseData: BaseResponse<T>,
) {
  console.info(
    `\n\t<----- ${method} RESPONSE ----->\n\t-URL: ${url}\n\t-CODE: ${
      response?.status
    }\n\t-BODY: ${
      method === 'POST' && formData
        ? JSON.stringify(formData)
            .replace(/"base64ImageFront","([^"]*)"/, (_, value) => {
              if (value.length > 50) {
                value = value.substring(0, 50) + '...';
              }
              return `"base64ImageFront","${value}"`;
            })
            .replace(/"base64ImageBack","([^"]*)"/, (_, value) => {
              if (value.length > 50) {
                value = value.substring(0, 50) + '...';
              }
              return `"base64ImageBack","${value}"`;
            })
            .replace(/"imagebase64","([^"]*)"/, (_, value) => {
              if (value.length > 50) {
                value = value.substring(0, 50) + '...';
              }
              return `"imagebase64","${value}"`;
            })
        : JSON.stringify(obj)
    }\n\t-RESPONSE:\n\t${JSON.stringify(responseData)
      .replace(/"imageIdentityCardFront":"([^"]*)"/, (_, value) => {
        if (value.length > 50) {
          value = value.substring(0, 50) + '...';
        }
        return `"imageIdentityCardFront":"${value}"`;
      })
      .replace(/"base64ImageFront","([^"]*)"/, (_, value) => {
        if (value.length > 50) {
          value = value.substring(0, 50) + '...';
        }
        return `"base64ImageFront","${value}"`;
      })
      .replace(/"base64ImageBack","([^"]*)"/, (_, value) => {
        if (value.length > 50) {
          value = value.substring(0, 50) + '...';
        }
        return `"base64ImageBack","${value}"`;
      })}`,
  );
}

function logInfo(
  method: string,
  url: string,
  requestOptions: RequestInit,
  formData: FormData | undefined,
  obj: any,
) {
  console.info(
    `\n\t<--------- ${method} ---------->\n\t-URL: ${url} \n\t-HEADER: ${JSON.stringify(
      requestOptions.headers,
    )}\n\t-BODY: ${
      method === 'POST' && formData
        ? JSON.stringify(formData)
            .replace(/"base64ImageFront","([^"]*)"/, (_, value) => {
              if (value.length > 50) {
                value = value.substring(0, 50) + '...';
              }
              return `"base64ImageFront","${value}"`;
            })
            .replace(/"base64ImageBack","([^"]*)"/, (_, value) => {
              if (value.length > 50) {
                value = value.substring(0, 50) + '...';
              }
              return `"base64ImageBack","${value}"`;
            })
            .replace(/"imagebase64","([^"]*)"/, (_, value) => {
              if (value.length > 50) {
                value = value.substring(0, 50) + '...';
              }
              return `"imagebase64","${value}"`;
            })
        : JSON.stringify(obj)
    }`,
  );
}
