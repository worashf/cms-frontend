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
        <Route path="/compliant-detail/:compliantId" element={<Navigate to="/admin/compliant-detail/:id" replace />} />
        <Route path="/users" element={<Navigate to="/admin/users" replace />} />
        <Route path="/employees" element={<Navigate to="/admin/employees" replace />} />
        <Route path="/institutions" element={<Navigate to="/admin/institutions" replace />} />
        <Route path="/" element={<Navigate to="/auth/" replace />} />
        <Route path="/new-complian-response/:compliantId" element={<Navigate to="/admin/new-complian-response/:compliantId" replace />} />
         <Route path="/valid-compliants" element={<Navigate to="/admin/valid-compliants" replace />} />
        <Route path="/invalid-compliants" element={<Navigate to="/admin/invalid-compliants" replace />} /> 
        <Route path="/compliants" element={<Navigate to="/admin/compliants" replace />} /> 
        <Route path="/employee-compliants-responses" element={<Navigate to="/admin/employee-compliants-responses" replace />} /> 
        <Route path="/compliant-response-detail/:compliantId" element={<Navigate to="/admin/compliant-response-detail/:compliantId" replace />} />
        
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
