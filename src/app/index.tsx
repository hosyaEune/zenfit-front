import { composeProviders } from "../shared/utils/lib/compose-providers";

const App = () => <div>App</div>;

const AppWithProviders = composeProviders()(App);

export { AppWithProviders as App };
