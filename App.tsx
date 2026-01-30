import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import ProblemSolution from './components/ProblemSolution';
import Courses from './components/Courses';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <ProblemSolution />
        <Courses />
      </main>
      <Footer />
    </div>
  );
}

export default App;