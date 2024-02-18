import BaseCodeBlockService from "../base-code-block-service";

export default class ListRenderingCodeBlockService extends BaseCodeBlockService {
  static id() {
    return 4;
  }

  static displayName() {
    return "List Rendering";
  }

  static description() {
    return "List rendering dynamically generates HTML elements from a list or array, commonly used in web development for displaying collections of items.";
  }

  static learnMoreUrl() {
    return "https://react.dev/learn/rendering-lists";
  }

  static instructions() {
    return "To render a list of items, use the `map` method to iterate over the list and return a new array of elements. Then, use the new array of elements to update the UI.";
  }
}
