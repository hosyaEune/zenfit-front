import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css";

import { Provider as P } from "@/components/ui/provider";
import type { Provider } from "@/shared/utils/lib/compose-providers/types";

export const ChakraProvider: Provider = ({ children }) => <P>{children}</P>;
