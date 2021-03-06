import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head />
        <link href="./styles.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
        <script src="https://kit.fontawesome.com/130eb0502b.js" crossOrigin="anonymous"></script>
        <body className="bg">
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
        </body>
      </Html>
    );
  }

}