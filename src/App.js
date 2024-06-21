import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from "./Pages/EditForm";
import HomePage from "./HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditForm />} />
      </Routes>
    </BrowserRouter>
  );
}
