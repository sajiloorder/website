"use client";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import NavContextProvider from "@/context/NavContext";
import { OrderContext, OrderProvider } from "@/context/OrderContext";
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
        template='<div class="bar" role="bar"><div class="peg"></div></div> <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />

      <Provider store={store}>
        <OrderProvider>
          <CartProvider />
          <NavContextProvider>
            <Nav />
            {/* button */}
            {/* layout wrapper */}
            <main
              id="app"
              className=" mx-auto
                        w-full
                        max-w-screen-2xl
                        px-4
                        sm:px-6
                        md:px-8
                        lg:px-10
                        xl:px-12
                        hideen
                        2xl:px-16
                        mt-20
                        "
            >
              {children}
            </main>
            <div id="modal-root"></div>
            <Footer />
          </NavContextProvider>
        </OrderProvider>
      </Provider>
    </>
  );
}
