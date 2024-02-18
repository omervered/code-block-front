import BaseCodeBlockService from "../base-code-block-service";

export default class StateCodeBlockService extends BaseCodeBlockService {
  static id() {
    return 3;
  }

  static displayName() {
    return "State Management";
  }

  static description() {
    return "State management organizes and tracks changes to data in your application, enabling dynamic and interactive user interfaces.";
  }

  static learnMoreUrl() {
    return "https://react.dev/learn/state-management";
  }

  static instructions() {
    return "To manage state in your application, use the `useState` hook to create a state variable and a function to update it. Then, use the state variable to update the UI based on user interactions.";
  }
}
