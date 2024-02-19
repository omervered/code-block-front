import codeBlocksIds from "../../../constants/code-blocks-ids";
import BaseCodeBlockService from "../base-code-block-service";

export default class ConditionalRenderingCodeBlockService extends BaseCodeBlockService {
  static id() {
    return codeBlocksIds.CONDITIONAL_RENDERING;
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

  static BackgroundColor() {
    return "#98FB98";
  }

  static instructions() {
    return (
      "// Exercise:\n" +
      "// Modify the `renderContent` function to conditionally render content based on the value of `isLoggedIn`. If `isLoggedIn` is true, render a welcome message. If not, render a login prompt.\n\n" +
      "// Function to Modify:\n\n" +
      "function renderContent(isLoggedIn) {\n" +
      "  if (isLoggedIn) {\n" +
      "    return <h1>Welcome!</h1>;\n" +
      "  } else {\n" +
      "    return <button>Login</button>;\n" +
      "  }\n" +
      "}\n" +
      "// Write your solution below:\n\n"
    );
  }
}
