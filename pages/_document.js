import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <main id="container"></main>
          <script type="text/javascript" src="/static/render-art-app.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
