import Link from "next/link";

const HomePage = () => (
  <>
    <h2>Home</h2>
    <br />
    <Link href="/signin">Sign in</Link>
    <br />
    <Link href="/signup">Sign up</Link>
  </>
);

export default HomePage;
