import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <meta
            name="description"
            content="Generated by create next app by mrtnprzk"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="flex flex-col m-0 p-0 min-h-[93vh] min-w-fit mt-20 bg-gray-100">
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;