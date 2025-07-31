"use client";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import NavContextProvider from "@/context/nav-context";
import store from "@/store";
import CartProvider from "@/store/CartProvider";
import NextTopLoader from "nextjs-toploader";
import { Provider } from "react-redux";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* top loader */}

      <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
      <Provider store={store}>
        <CartProvider />
        <NavContextProvider>
          <Nav />
          {/* button */}
          <main id="app">{children}</main>
          <Footer />
        </NavContextProvider>
      </Provider>
    </>
  );
}
