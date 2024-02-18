import { reduce } from "lodash";

import AsyncCodeBlockService from "./async-code-block-service";
import ConditionalRenderingCodeBlockService from "./conditional-rendering-code-block-service";
import ListRenderingCodeBlockService from "./list-rendering-code-block-service";
import StateCodeBlockService from "./state-code-block-service";

export const CodeBlocksServices = [
  AsyncCodeBlockService,
  ConditionalRenderingCodeBlockService,
  ListRenderingCodeBlockService,
  StateCodeBlockService,
];

export default reduce(
  CodeBlocksServices,
  (serviceMapping, Service) => {
    serviceMapping[Service.id()] = Service;
    return serviceMapping;
  },
  {}
);
