import { Routes, Route } from "react-router";
import Login from "./pages/login";
import Register from "./pages/register";
import NotFound from "./pages/notfound";
import Layout from "./components/layout";
import ForgotPassword from "./pages/forgotpassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
