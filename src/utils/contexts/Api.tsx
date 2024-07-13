/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FC,
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import configVariables from "../../configs";
import { useLocalStorage } from "usehooks-ts";

import { toast } from "react-hot-toast";

import { AuthContext } from "./Auth";

export type ApiContextProps = {
  api: AxiosInstance;
  loading: boolean;
};

type ApiProviderProps = {
  children?: React.ReactNode;
};

export type ErrorMessageApi = {
  error: string;
  message: string;
  statusCode: number;
};

type ResponseInterceptors = AxiosResponse | Promise<AxiosResponse>;

export type InterceptorsLoading = {
  request: (arg: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig;
  response: (arg: AxiosResponse) => ResponseInterceptors;
  error: (error: Error) => any;
};

export const ApiContext = createContext<ApiContextProps | null>(null);
const { Provider } = ApiContext;

export const ApiProvider: FC<ApiProviderProps> = ({
  children,
}): ReactElement => {
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "access_token",
    null
  );
  const [, setUserEncrypted] = useLocalStorage("user_info", null);

  const [counter, setCounter] = useState<number>(0);

  const increment = useCallback(
    () => setCounter((counter) => counter + 1),
    [setCounter]
  );
  const decrement = useCallback(
    () => setCounter((counter) => counter - 1),
    [setCounter]
  );

  const { handleModalLogin } = useContext(AuthContext);

  const interceptorsLoading = useMemo<InterceptorsLoading>(
    () => ({
      request: (config) => {
        increment();
        return config;
      },
      response: (response) => {
        decrement();
        return response;
      },
      error: (error) => {
        decrement();
        return Promise.reject(error);
      },
    }),
    [increment, decrement]
  );

  const removeUserInfo = () => {
    setUserEncrypted(null);
    setAccessToken(null);
    handleModalLogin(true);
  };

  const api = useMemo<AxiosInstance>(() => {
    const api = axios.create({
      baseURL: configVariables.api_url,
    });

    const { error, request, response } = interceptorsLoading;

    api.interceptors.request.use(async (config) => {
      if (accessToken) {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      }

      return config;
    });

    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401) {
          removeUserInfo();
        }
        toast.error(error?.response?.data?.message);
        throw error;
      }
    );

    api.interceptors.request.use(request, error);
    api.interceptors.response.use(response, error);

    return api;
  }, [accessToken]);

  return <Provider value={{ api, loading: counter > 0 }}>{children}</Provider>;
};
