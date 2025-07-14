import AuthProvider from '@processes/authentication';

const withAuthentication = (component: () => React.ReactNode) =>
  function withAuthenticationProvider() {
    return <AuthProvider>{component()}</AuthProvider>;
  };

export default withAuthentication;
