import { createContext, ReactNode, useContext, useState } from "react";
import Toast, { TToastProps } from "src/components/toast/toast.component";

const ToastContext = createContext({} as any);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<TToastProps>({
    message: "",
    type: undefined,
  });

  const showToast = ({ message, type }: TToastProps) =>
    setToast({ message, type });
  const hiddenToast = () => setToast({ message: "", type: undefined });

  return (
    <ToastContext.Provider value={{ showToast, hiddenToast }}>
      {children}
      {toast.message && <Toast message={toast.message} type={toast.type} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
