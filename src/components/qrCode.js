import QRCode from "react-qr-code";
import { withLDConsumer } from "launchdarkly-react-client-sdk";

// Set QR URL to match the GitHub Pages deployment
let QR_URL = "https://devopsdina.github.io/react_qr_app_ld_beginners";

const qrCodeHome = ({ flags }) => {

    // See this page for details: https://docs.launchdarkly.com/sdk/client-side/react/react-web#flag-keys
    return flags.showQrCode ? (
    <div>
      <br />
      <span style={{ color: 'black' }}><center>Scan me!</center></span>
      <div className="qr-wrapper">
        <QRCode value={QR_URL} />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default withLDConsumer()(qrCodeHome);