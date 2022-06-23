import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListAct from "./components/ListAct";
import EditAct from "./components/EditAct";
import AddAct from "./components/AddAct";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height:600}}
      >
      </div>
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex flex-column mb-2 p-5 justify-content-center h-100">
          <Router>
            <Routes>
              <Route path="/" element={<ListAct />}></Route>
              <Route path="/add" element={<AddAct />}></Route>
              <Route path="/edit/:id" element={<EditAct />}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
