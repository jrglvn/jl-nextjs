import Head from "next/head";
import Link from "next/link";

import Sidebar from "../components/Sidebar";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <Sidebar />
        <div>
          <h1>
            Welcome to{" "}
            <Link href="/docs">
              <a>docs</a>
            </Link>
          </h1>
          {props.children}
        </div>
      </div>
    </div>
  );
}
