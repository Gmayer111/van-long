import { TFieldItem } from "../form";

const ErrorMessage = ({ errorMessage }: Pick<TFieldItem, "errorMessage">) => {
  if (!errorMessage) return null;

  return (
    <div className="error-message-container">
      <span role="alert">{errorMessage}</span>
    </div>
  );
};

export default ErrorMessage;
