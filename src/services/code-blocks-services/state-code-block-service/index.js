import codeBlocksIds from "../../../constants/code-blocks-ids";
import BaseCodeBlockService from "../base-code-block-service";

export default class StateCodeBlockService extends BaseCodeBlockService {
  static id() {
    return codeBlocksIds.STATE_MANAGEMENT;
  }

  static displayName() {
    return "State Management";
  }

  static description() {
    return "State management organizes and tracks changes to data in your application, enabling dynamic and interactive user interfaces.";
  }

  static learnMoreUrl() {
    return "https://react.dev/learn/managing-state";
  }

  static BackgroundColor() {
    return "#FFC0CB";
  }

  static instructions() {
    return (
      "// Exercise:\n" +
      "// Modify the `toggleState` function to toggle the value of `isOn` between true and false when called.\n\n" +
      "// Function to Modify:\n\n" +
      "function toggleState(isOn) {\n" +
      "  return !isOn;\n" +
      "}\n\n" +
      "// Write your solution below:\n"
    );
  }
}
