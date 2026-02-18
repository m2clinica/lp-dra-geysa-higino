import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Locations } from './components/sections/Locations';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

function App() {
    return (
        <div className="min-h-screen bg-background font-sans text-text selection:bg-secondary selection:text-primary">
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <Services />
                <About />
                <Locations />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}

export default App;
