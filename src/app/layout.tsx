import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";
import SubLinksComponent from "@/components/SubLinksComponent";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import Head from "next/head";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Paige",
  description: "Paige",
  icons:{
    icon:"/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <Head>
         <Script id="gtm-init" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M6843CTP');
          `}
        </Script>
      </Head>
      <ClientProvider>
      <body
        className={`bg-bgcolor  font-lato`}
        >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6843CTP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

          <ReactQueryProvider>
          <SubLinksComponent/>
        {children}
          </ReactQueryProvider>
      </body>
        </ClientProvider>
    </html>
  );
}
