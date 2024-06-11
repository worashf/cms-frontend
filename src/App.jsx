import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
  <>
    <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="/sign-in" element={<Navigate to="/auth/sign-in" replace />} />
        <Route path="/sign-up" element={<Navigate to="/auth/sign-up" replace />} />
        <Route path="/new-complain" element={<Navigate to="/admin/new-complain" replace />} />
        <Route path="/" element={<Navigate to="/auth/" replace />} />

      </Routes>
  <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  </>
    

  );
};

export default App;
