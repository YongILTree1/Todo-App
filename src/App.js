import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./component/Header";
import Date from "./component/Date";
import List from "./component/List";
import Footer from "./component/Footer";
import Create from "./component/Create";
import DiaryButton from "./component/DiaryButton";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Date />
        <div className="container">
          <List data={data} />
          <Create setData={setData} />
          <DiaryButton />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
