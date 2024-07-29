// Import Components
import Layout from "./components/Layout/Layout";
import Home from "./screens/Home.jsx";

// Import LIbraries
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // Routes
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
