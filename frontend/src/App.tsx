import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SingIn from "./pages/SingIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
            </Layout>
          }
        />

        <Route
          path="/search"
          element={
            <Layout>
              <p>Seach Page</p>
            </Layout>
          }
        />

        <Route path="/register" element={<Layout>
          <Register />
        </Layout>} />

        <Route path="/sign-in" element={<Layout>
          <SingIn />
        </Layout>} />


        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App;