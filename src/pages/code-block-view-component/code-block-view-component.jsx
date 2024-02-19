import MonacoEditor from "@monaco-editor/react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import CodeBlocksServices from "../../services/code-blocks-services";
import { codeService } from "../../services/code.service";

import * as Styles from "./code-block-view-component-styles";

export default function CodeBlockViewComponent(props) {
  const { id } = useParams();
  const [code, setCode] = useState("");
  const handleEditorChange = (value, event) => {
    setCode(value);
  };

  useEffect(() => {
    fetchCodeBlockById(id);
    setCode(instructions);
  }, [id]);

  async function fetchCodeBlockById(id) {
    try {
      const codeBlock = await codeService.getById(id);
      setCode(codeBlock.codeStarter);
    } catch (err) {
      console.log(err);
    }
  }

  const CodeBlockService = CodeBlocksServices[id];

  const displayName = CodeBlockService.displayName();
  const learnMoreUrl = CodeBlockService.learnMoreUrl();
  const instructions = CodeBlockService.instructions();

  return (
    <Styles.CodeBlockView>
      <Styles.Header></Styles.Header>
      <Styles.Title> {displayName} </Styles.Title>
      <Styles.ButtonWrapper>
        {" "}
        <Styles.Link href={learnMoreUrl} target="_blank">
          Learn More
        </Styles.Link>
        <Styles.Link as={Link} to="/">
          Back
        </Styles.Link>
      </Styles.ButtonWrapper>
      <Styles.CodeBlockWrapper>
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={instructions}
          options={{
            minimap: { enabled: false },
            automaticLayout: true,
          }}
          onChange={handleEditorChange}
        />
      </Styles.CodeBlockWrapper>
    </Styles.CodeBlockView>
  );
}
