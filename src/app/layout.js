import "../app/scss/style.scss";
import Footer from "./componentsfile/Footer";
import Navbar from "./componentsfile/Navbar";

export const metadata = {
  title: "Forestry Games",
  description: "Play all your favourite games here for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&family=Montserrat:wght@100;300;400&family=Open+Sans:wght@100;300;400&family=Poppins:wght@100;300;400&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Navbar />
       {children}
        <Footer />
      </body>
    </html>
  );
}
