import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import {Navigation} from './Navigation/Navigation'

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const ApartmentsPage = lazy(() => import("./pages/ApartmentsPage"));
  const ApartmentsDetails = lazy(() => import("./pages/ApartmentsDetails"));

  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route
            path="/apartments/:apartmentId"
            element={<ApartmentsDetails />}
          />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
