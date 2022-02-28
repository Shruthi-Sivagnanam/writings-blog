import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPages from "./screen/LandingPages/LandingPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPages from "./screen/Login-signupPages/LoginPages";
import Signup from "./screen/Login-signupPages/Signup";
import { Provider } from "react-redux";
import store from "./store";
import AccountPages from "./screen/AccountPages/Accountpages";
import Myblog from "./screen/BlogPages/Myblog";
import Createblog from "./screen/BlogPages/Createblogs";
import Allblogs from "./screen/BlogPages/Allblogs";
import Blogpage from "./screen/BlogPages/Blogpage";
import Editblog from "./screen/BlogPages/Editblog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPages />} />
            <Route path="/login" element={<LoginPages />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/allblogs" element={<Allblogs />} />
            <Route path="/allblogs/:id" element={<Blogpage />} />
            <Route path="/:id" element={<AccountPages />} />
            <Route path="/:id/myblogs" element={<Myblog />} />
            <Route path=":id/myblogs/:id1" element={<Blogpage />} />
            <Route path="/:id/myblog/:id1/editblog" element={<Editblog />} />
            <Route path="/:id/myblogs/createblog" element={<Createblog />} />
          </Routes>
        </Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
