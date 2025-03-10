import { composeProviders } from "../shared/utils/lib/compose-providers";

const App = () => {
  return <div>App</div>;
};

const AppWithProviders = composeProviders()(App);

export { AppWithProviders as App };
