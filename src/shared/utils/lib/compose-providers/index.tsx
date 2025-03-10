import { ComponentType } from "react";
import { Provider } from "./types";

export function composeProviders(...providers: Provider[]) {
  return function (WrappedComponent: ComponentType) {
    const ComposedComponent: React.FC = (props) => {
      return providers.reduceRight(
        (children, Provider) => <Provider>{children}</Provider>,
        <WrappedComponent {...props} />
      );
    };

    return ComposedComponent;
  };
}
