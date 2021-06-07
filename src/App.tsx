import { ConfigProvider } from "antd";
import enUS from "antd/lib/locale/en_US";
import "antd/dist/antd.css";

import Demo from "./Demo";

function App() {
  return (
    <ConfigProvider locale={enUS}>
      <Demo />
    </ConfigProvider>
  );
}

export default App;
