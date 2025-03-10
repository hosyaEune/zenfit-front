import type { FC, JSX } from "react";

import type { Provider } from "./types";

export const composeProviders =
  (...providers: Provider[]) =>
  <T,>(WrappedComponent: FC<T & JSX.IntrinsicAttributes>) => {
    const ComposedComponent: FC<T & JSX.IntrinsicAttributes> = (props) =>
      providers.reduceRight(
        (children, Provider) => <Provider>{children}</Provider>,
        <WrappedComponent {...props} />
      );

    return ComposedComponent;
  };
