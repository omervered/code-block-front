import codeBlocksIds from "../../../constants/code-blocks-ids";

export default class BaseCodeBlockService {
  static id() {
    return codeBlocksIds.ASYNC;
  }

  static displayName() {
    return "Async Code Block";
  }

  static description() {
    return "Asynchronous code lets your program run without waiting for long tasks like data fetching to finish, making it more efficient and responsive to user input.";
  }

  static learnMoreUrl() {
    return "https://react.dev/learn/async-code-blocks";
  }

  static instructions() {
    return "To fetch data asynchronously in your application, use the `useEffect` hook to run a function that fetches data from an API. Then, use the `useState` hook to store the data and update the UI.";
  }
}
