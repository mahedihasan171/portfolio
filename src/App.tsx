/**
 * App Component
 *
 * Root component of the portfolio application.
 * It assembles the application's layout by rendering
 * shared components and page sections.
 */

import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";


function App() {
  return (
    <>
      {/* Primary site navigation */}
      <Navbar />

      {/* Main page content */}
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;