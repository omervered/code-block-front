// import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CodeBlocksViewComponent } from "./pages/code-blocks-view-component/code-blocks-view-component";
import { AppHeaderComponent } from "./cmps/app-header-component/app-header-component";
import CodeBlockViewComponent from "./pages/code-block-view-component/code-block-view-component";

export function App() {
  return (
    <Router>
      <AppHeaderComponent />
      <Routes>
        <Route element={<CodeBlocksViewComponent />} path="/" />
        <Route element={<CodeBlockViewComponent />} path="/code-block/:id" />
      </Routes>
    </Router>
  );
}

export default App;
