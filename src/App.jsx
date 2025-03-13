import { useState } from "react";
import "./styles/main.scss";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
    </>
  );
}
