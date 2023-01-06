import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, FourOFour, Navbar, Footer } from "./components"

export default function App() {
	return (
		<div className="dark:bg-gray-900">
      <Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/404" element={<FourOFour />} />
          <Route path="*" element={ <Navigate to="/404" replace />} />
				</Routes>
			</main>
      <Footer />
		</div>
	);
}
