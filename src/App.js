import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./component/Header";
import Date from "./component/Date";
import List from "./component/List";
import Footer from "./component/Footer";
import Create from "./component/Create";
import DiaryButton from "./component/DiaryButton";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Date />
        <div className="container">
          <List />
          <Create />
          <DiaryButton />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
