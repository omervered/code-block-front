import codeBlocksIds from "../../../constants/code-blocks-ids";
import BaseCodeBlockService from "../base-code-block-service";

export default class ListRenderingCodeBlockService extends BaseCodeBlockService {
  static id() {
    return codeBlocksIds.LIST_RENDERING;
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

  static BackgroundColor() {
    return "#ADD8E6";
  }

  static instructions() {
    return (
      "// Exercise:\n" +
      "// Transform the `renderList` function to map over the `items` array and render each item as an <li> element.\n\n" +
      "// Function to Transform:\n\n" +
      "function renderList(items) {\n" +
      "  return (\n" +
      "    <ul>\n" +
      "      {items.map(item => (\n" +
      "        <li key={item.id}>{item.name}</li>\n" +
      "      ))}\n" +
      "    </ul>\n" +
      "  );\n" +
      "}\n" +
      "// Write your solution below:\n\n"
    );
  }
}
