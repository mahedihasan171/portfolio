/**
 * App Component
 *
 * Root component of the portfolio application.
 * It assembles the application's layout by rendering
 * shared components and page sections.
 */

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      {/* Primary site navigation */}
      <Navbar />

      {/* Main page content */}
      <main className="max-w-7xl mx-auto px-8">
        <h1 className="text-6xl font-bold mt-20">
          Portfolio
        </h1>
      </main>
    </>
  );
}

export default App;