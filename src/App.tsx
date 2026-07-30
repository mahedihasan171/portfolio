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
      <main>
        <h1>Portfolio</h1>
      </main>
    </>
  );
}

export default App;