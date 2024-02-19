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
    return "https://docs.react-async.com/";
  }

  static BackgroundColor() {
    return "#FFD700";
  }

  static instructions() {
    return (
      "//Exercise:\n" +
      "//Transform the provided function `fetchData` into an async function using `async/await`.\n// Don't forget to handle errors.\n\n" +
      "//Function to Transform:\n\n" +
      "function fetchData() {\n" +
      "  return fetch('https://api.example.com/data')\n" +
      "    .then(response => {\n" +
      "      if (!response.ok) {\n" +
      "        throw new Error('Network response was not ok');\n" +
      "      }\n" +
      "      return response.json();\n" +
      "    })\n" +
      "    .then(data => data)\n" +
      "    .catch(error => {\n" +
      "      console.error('Error fetching data:', error);\n" +
      "      throw error;\n" +
      "    });\n" +
      "}\n" +
      "//Write your solution below:\n\n"
    );
  }
}
