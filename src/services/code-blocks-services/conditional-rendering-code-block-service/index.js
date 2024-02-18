import BaseCodeBlockService from "../base-code-block-service";

export default class ConditionalRenderingCodeBlockService extends BaseCodeBlockService {
  static id() {
    return 2;
  }

  static displayName() {
    return "Conditional Rendering";
  }

  static description() {
    return "Conditional rendering displays content based on specific conditions, allowing dynamic updates to the UI.";
  }

  static learnMoreUrl() {
    return "https://react.dev/learn/conditional-rendering";
  }

  static instructions() {
    return "To conditionally render content, use the `if` statement or the `ternary operator` to check a condition and return the content based on the result. Then, use the returned content to update the UI.";
  }
}
