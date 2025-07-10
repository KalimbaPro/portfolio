import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Scene3D from "@/components/Scene3D";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      <div className="relative z-10">
        <Navigation />
      </div>

      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
