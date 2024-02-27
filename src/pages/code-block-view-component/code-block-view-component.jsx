import MonacoEditor from "@monaco-editor/react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import CodeBlocksServices from "../../services/code-blocks-services";
import { socketService, SOCKET_ADD_CODE, SOCKET_SEND_CODE } from "../../services/socket.service";
import { codeService } from "../../services/code.service";

import * as Styles from "./code-block-view-component-styles";

export default function CodeBlockViewComponent() {
  const { id } = useParams();
  const CodeBlockService = CodeBlocksServices[id];
  const [code, setCode] = useState(CodeBlockService.instructions());

  const handleEditorChange = (value) => {
    const change = value.slice(-1);
    socketService.emit(SOCKET_SEND_CODE, change);
  };

  useEffect(() => {
    const fetchCodeBlockById = async (id) => {
      try {
        const codeBlock = await codeService.getById(id);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCodeBlockById(id);

    socketService.on(SOCKET_ADD_CODE, (change) => {
      setCode((prevCode) => prevCode + change);
    });

    return () => {
      socketService.off(SOCKET_ADD_CODE);
    };
  }, [id]);

  const displayName = CodeBlockService.displayName();
  const learnMoreUrl = CodeBlockService.learnMoreUrl();
  const backgroundColor = CodeBlockService.BackgroundColor();

  return (
    <Styles.CodeBlockView>
      <Styles.Header></Styles.Header>
      <Styles.Title>{displayName}</Styles.Title>
      <Styles.ButtonWrapper>
        <Styles.Link href={learnMoreUrl} target="_blank">
          Learn More
        </Styles.Link>
        <Styles.Link as={Link} to="/">
          Back
        </Styles.Link>
      </Styles.ButtonWrapper>
      <Styles.CodeBlockWrapper style={{ backgroundColor }}>
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={code}
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
