// import MonacoEditor from "react-monaco-editor";
import MonacoEditor from "@monaco-editor/react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import CodeBlocksServices from "../../services/code-blocks-services";

import "highlight.js/styles/default.css";
import * as Styles from "./code-block-view-component-styles";

export default function CodeBlockViewComponent(props) {
  const { id } = useParams();
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleEditorChange = (value, event) => {
    setCode(value);
  };

  const CodeBlockService = CodeBlocksServices[id];

  const displayName = CodeBlockService.displayName();

  return (
    <Styles.CodeBlockView>
      <Styles.CodeBlockWrapper>
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={code}
          options={{
            minimap: { enabled: false },
            automaticLayout: true,
            readOnly: true,
          }}
          onChange={handleEditorChange}
        />
      </Styles.CodeBlockWrapper>
    </Styles.CodeBlockView>
  );
}
