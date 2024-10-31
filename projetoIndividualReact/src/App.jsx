import React from "react";
import Imc from "./components/Imc";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

export default function App() {
  return (
    <>
      <Header />

      <Imc />

      <Footer />
    </>
  );
}
