import ReduxProvider from "@/components/ReduxProvider";

export const metadata = {
  title: "test-app",
};

const RootLayout = ({ children }) => {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ReduxProvider>
  );
};

export default RootLayout;
