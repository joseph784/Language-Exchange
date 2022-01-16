import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing/LandingPage";
import { SearchPage } from "./pages/search/SearchPage";
import "./App.css";
import NavBar from "./components/NavBar";
import { VStack } from "@chakra-ui/react";

function App() {
  return (
    <div className='App'>
      <VStack>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='search' element={<SearchPage />} />
      </Routes>
      </VStack>
    </div>
  );
}

export default App;
