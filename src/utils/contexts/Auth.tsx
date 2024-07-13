import { createContext, useMemo, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import axios from "axios";

import configVariables from "../../configs";

import { ModalLogin } from "../../components/ModalLogin";
import toast from "react-hot-toast";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextProps = {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  handleModalLogin: (status?: boolean) => void;
  modalLogin: boolean;
  user: UserProps | null;
  loading: boolean;
  isLogged: boolean;
};

const defaultAuthContext = {
  login: async () => {
    return;
  },
  logout: async () => {
    return;
  },
  user: null,
  loading: false,
  isLogged: false,
  modalLogin: false,
  handleModalLogin: () => {
    return;
  },
};

export type RuleProps = {
  resource: string;
  action: string;
};

export type UserProps = {
  id: string;
  name?: string;
  email?: string;

  updatedAt?: string;
  createdAt?: string;
};

export const AuthContext = createContext<AuthContextProps>(defaultAuthContext);
const { Provider } = AuthContext;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [modalLogin, setModalLogin] = useState<boolean>(false);

  const [userCache, setUserCache] = useLocalStorage<string | null>(
    "user_info",
    null
  );
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "access_token",
    null
  );

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      const {
        data: { access_token: accessToken, user },
      } = await axios.post(`${configVariables.api_url}/login`, {
        email,
        password,
      });

      if (user) {
        setUserCache(JSON.stringify(user));
        setAccessToken(accessToken);
      }
      setModalLogin(false);
      toast.success("Login success");
    } catch (error) {
      logout();

      toast.error("Error on login");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setUserCache(null);
    setAccessToken(null);
    localStorage.removeItem("user_info");
    localStorage.removeItem("access_token");
  };

  const handleModalLogin = (status?: boolean) => {
    if (status !== undefined) {
      setModalLogin(status);
      return;
    }
    setModalLogin(!modalLogin);
  };

  const user = useMemo<UserProps | null>(() => {
    try {
      if (!userCache) return null;

      return JSON.parse(userCache) as UserProps;
    } catch (error) {
      logout();

      return null;
    }
  }, [userCache]);

  const validateTokenExpiration = (token: string): boolean => {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    return Math.floor(new Date().getTime() / 1000) <= expiry;
  };

  const isLogged = useMemo<boolean>(() => {
    if (!accessToken) return false;

    const tokenValid = validateTokenExpiration(accessToken);

    return !!user && tokenValid;
  }, [accessToken]);

  // useEffect(() => {
  //   setModalLogin(!isLogged);
  // }, [isLogged]);

  return (
    <Provider
      value={{
        login,
        logout,
        user,
        isLogged,
        loading,
        modalLogin,
        handleModalLogin,
      }}
    >
      <ModalLogin open={modalLogin} onClose={() => handleModalLogin(false)} />
      {children}
    </Provider>
  );
};
