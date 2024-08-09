// Import Components
import Layout from "./components/Layout/Layout";

// Import Screens
import Home from "./screens/Home.jsx";
import About from "./screens/About.jsx";
import Listings from "./screens/Listings.jsx";
import ListingDetail from "./screens/ListingDetail.jsx";
import Register from "./screens/Register.jsx";
import Login from "./screens/Login.jsx";
import Dashboard from "./screens/dashboard/Dashboard.jsx";
import ListingsData from "./screens/dashboard/ListingsData.jsx";
import AddListings from "./screens/dashboard/AddListings.jsx";
import EditListing from "./screens/dashboard/EditListing.jsx";
import Realtors from "./screens/dashboard/Realtors.jsx";
import AddRealtor from "./screens/dashboard/AddRealtor.jsx";
import EditRealtor from "./screens/dashboard/EditRealtor.jsx";



// Import LIbraries
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // Routes
    <Routes>
      {/* Homepage */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      {/* About Page */}
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      {/* Listings Page */}
      <Route
        path="/listings"
        element={
          <Layout>
            <Listings />
          </Layout>
        }
      />
      {/* Listing Detail Page */}
      <Route
        path="/listings/:id"
        element={
          <Layout>
            <ListingDetail />
          </Layout>
        }
      />
      {/* Register Page */}
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      {/* Login Page */}
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      {/* Dashboard Page */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      {/* Listings Data Page */}
      <Route
        path="/dashboard/listings"
        element={
          <Layout>
            <ListingsData />
          </Layout>
        }
      />

      {/* Add New Listings Page */}
      <Route
        path="/dashboard/listings/add"
        element={
          <Layout>
            <AddListings />
          </Layout>
        }
      />

      {/* Edit Listings Page */}
      <Route
        path="/dashboard/listings/:id/edit"
        element={
          <Layout>
            <EditListing />
          </Layout>
        }
      />

      {/* Realtors List Page */}
      <Route
        path="/dashboard/realtors"
        element={
          <Layout>
            <Realtors />
          </Layout>
        }
      />

      {/* Add New Realtor Page */}
      <Route
        path="/dashboard/realtors/add"
        element={
          <Layout>
            <AddRealtor />
          </Layout>
        }
      />

      {/* Update Realtor Page */}
      <Route
        path="/dashboard/realtors/:id/edit"
        element={
          <Layout>
            <EditRealtor />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
