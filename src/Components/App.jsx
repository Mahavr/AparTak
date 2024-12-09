import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Navigation } from "./Navigation/Navigation";
import Loader from "./Loader/loader";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const ApartmentsPage = lazy(() => import("./pages/ApartmentsPage"));
  const ApartmentsDetails = lazy(() => import("./pages/ApartmentsDetails"));
  const FailPage = lazy(() => import("./pages/FailPage"));

  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/apartments/:id" element={<ApartmentsDetails />} />
          <Route path="*" element={<FailPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
