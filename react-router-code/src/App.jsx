import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import Usage from "./pages/Usage"
import Users from "./pages/Users"
import Header from "./components/Header"
import Detail from "./pages/Detail"
import NotFound from "./pages/NotFound"
import Marks from "./pages/Marks"
import Sports from "./pages/Sports"
import Remarks from "./pages/Remarks"


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="usage" element={<Usage />} />
        <Route path="users" >
          <Route index element={<Users/>} />
          <Route path="details/:userId/" element={<Detail />}>
            <Route path="marks" element={<Marks />} />
            <Route path="sports" element={<Sports />} />
            <Route path="remarks" element={<Remarks />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
