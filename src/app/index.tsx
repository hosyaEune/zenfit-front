import type { FC } from "react";

import { composeProviders } from "../shared/utils/lib/compose-providers";

type Props = {
  pleloadState?: typeof window.__PRELOAD_STATE__;
};

const App: FC<Props> = (props) => {
  console.log(props);

  return <div>App</div>;
};

const AppWithProviders = composeProviders()(App);

export { AppWithProviders as App };
