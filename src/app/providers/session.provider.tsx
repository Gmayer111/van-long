"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { verifySession } from "src/lib/sessions";

const SessionContext = createContext({} as any);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [userSession, setUserSession] = useState<boolean>();
  useEffect(() => {
    const getUserSession = async () => {
      const { isAuth } = await verifySession();
      setUserSession(isAuth);
    };

    getUserSession().catch((error) => {
      console.log("erreur getUserSession :", error);
    });
  }, []);

  return (
    <SessionContext.Provider value={userSession}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
