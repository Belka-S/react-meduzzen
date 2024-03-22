import { FC } from 'react';

import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const AuthProvider: FC<JSX.Element> = children => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
      onRedirectCallback={() => console.log('qwe')}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
