import "../styles/globals.css";
import React from "react";
import ReactDOM from "react-dom";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    window.renderArtApp = (containerId, history) => {
      console.log("containerId", containerId);
      ReactDOM.render(
        <Component {...pageProps} />,
        document.getElementById(containerId)
      );
      // serviceWorker.unregister();
    };

    window.unmountArtApp = (containerId) => {
      ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
    };

    if (!document.getElementById("Art-container")) {
      <Component {...pageProps} />;
    }
  });

  return <Component {...pageProps} />;
}

export default MyApp;
