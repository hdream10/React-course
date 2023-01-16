import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import "./styles/app.css";
import Posts from "./pages/posts";
import Home from "./pages/home";
import Layout from "./components/Layout";
import SingePage from "./pages/SinglePage";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./components/hoc/RequireAuth";
import { AuthProvider } from "./components/hoc/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="posts"
            element={
              <RequireAuth>
                <Posts />
              </RequireAuth>
            }
          />
          <Route path="allPosts" element={<Navigate to="/posts" replace />} />
          <Route path="posts/:id" element={<SingePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
