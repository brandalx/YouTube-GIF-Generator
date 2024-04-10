import "bulma/css/bulma.min.css";
import Link from "next/link";
import React from "react";
import "../styles/globals.css";
import Image from "next/image";
//@ts-expect-error - no error
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="container is-fluid">
        <div
          className="columns is-mobile is-vcentered  is-centered has-text-centered"
          style={{ width: "100%" }}
        >
          <div className="column is-6">
            <div className="content">
              <Link href="/https://brandnolandev.com/">
                <h5
                  className="hoverable"
                  style={{ textDecoration: "line-through" }}
                >
                  brndalx
                </h5>
              </Link>
              <Link href="/https://brandnolandev.com/assets/asset9-75c6a05d.png">
                <Image
                  className="hoverable"
                  src="/brgand.jp"
                  width="250"
                  height="100"
                />
              </Link>
            </div>
          </div>
        </div>
        <Component {...pageProps} />;
      </div>
    </>
  );
}

export default MyApp;
