import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { SearchFilterProvider } from "./contexts/SearchFilterContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-50z6kjgdp2n03py4.us.auth0.com"
    clientId="IUEozl1oW5vLU4jBKpVx8vkzU8jOr3mk"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
    <SearchFilterProvider>
      <App />
    </SearchFilterProvider>
    </BrowserRouter>
  </Auth0Provider>
);
