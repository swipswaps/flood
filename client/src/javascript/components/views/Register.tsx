import {FC} from 'react';

import ApplicationView from '../layout/ApplicationView';
import AuthForm from '../auth/AuthForm';

const LoginView: FC = () => {
  return (
    <ApplicationView modifier="auth-form">
      <AuthForm mode="register" />
    </ApplicationView>
  );
};

export default LoginView;
