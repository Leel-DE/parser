import { useRouteError } from 'react-router-dom';
import { FC } from 'react';

interface ErrorType {
  statusText?: string;
  message?: string;
}

const ErrorPage: FC = () => {
  const error = useRouteError() as ErrorType;
  console.error(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
