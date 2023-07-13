import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
export default function Home() {
  return (
    <main>
      <HeroBanner />
      <section class="features">
        <h2 class="sr-only">Features</h2>
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
      </section>
    </main>
  );
}
