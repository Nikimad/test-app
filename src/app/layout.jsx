import "styles/common.scss";

export const metadata = {
  title: "test-app",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      {children}
      <div id="modal-root"></div>
    </body>
  </html>
);

export default RootLayout;
