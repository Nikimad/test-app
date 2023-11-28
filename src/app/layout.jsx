import "styles/common.scss";

export const metadata = {
  title: "test-app",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
