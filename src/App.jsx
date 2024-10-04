import Contact from './components/Contact';
import CTASection from './components/CTASection';
import FaqSection from './components/FaqSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TeamSection from './components/TeamSection';
import PropertySection from './components/PropertySection';
import About from './components/About';

function App() {
	return (
		<>
			<header>
				<Navbar />
				<Hero />
			</header>
			<main>
				<FeatureSection />
				<PropertySection />
				<About />
				<CTASection />
				<FaqSection />
				<TeamSection />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
