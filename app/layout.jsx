import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import "@styles/globals.css";

// const Home = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Home

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Navbar />
          {children}
        </main>

      </Provider>
      </body>
    </html>
  );
}
