import localFont from "next/font/local";
import HeaderComponent from "../components/home/header"
import FooterComponent from "../components/home/footer"
import "./globals.css";
import ReduxProvider from '../redux/provider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Sharp|Material+Icons+Two+Tone|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
          rel='preload stylesheet'
          type='text/css'
          charSet='UTF-8'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gray-100">
          <ReduxProvider>
            <HeaderComponent />
            {children}
            <FooterComponent />
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
