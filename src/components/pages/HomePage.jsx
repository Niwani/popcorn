import Hero from "../Hero";
import Features from "../Features";
import Pricing from "../Pricing";
import Coverage from "../Coverage";
import CTA from "../CTA";

export default function HomePage() {
    return (
        <section>
            <Hero />
            <Features />
            <Pricing />
            <Coverage />
            <CTA />
        </section>
    ) 
}