import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const language = "inggris";
  return (
    <>
      <Header languageProps={language} />
      <Main languageProps={language} />
      <Footer languageProps={language} />
    </>
  );
}
