import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName, browserName  } from "react-device-detect";
import getUserId from "./util/getUserId";
import getClientKey from "./util/getClientKey";
import KeyForm from "./components/keyForm";

const CLIENT_KEY = getClientKey();

let id = getUserId();

(async () => {

  if (!CLIENT_KEY) {
    ReactDOM.render(
      <div>
        <KeyForm/>
      </div>,
      document.getElementById("root")
    );    
  } else {
    const LDProvider = await asyncWithLDProvider({
      clientSideID: CLIENT_KEY,
      sendEventsOnlyForVariation: true,
      context: {
        kind: "device",
        key: id,
        device: deviceType,
        operatingSystem: osName,
        browserName: browserName
      }
    });

    ReactDOM.render(
      <LDProvider>
        <App />
      </LDProvider>,
      document.getElementById("root")
    );
  }
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
