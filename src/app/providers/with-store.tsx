import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "../store";

const withStore = (component: () => React.ReactNode) =>
  function withStoreProvider() {
    const store = setupStore();
    return <Provider store={store}>{component()}</Provider>;
  };
export default withStore;
