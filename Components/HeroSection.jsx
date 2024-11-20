import { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { assets } from "@/Assets/assets";

// Disable SSR for this component
const HeroSection = () => {
  useEffect(() => {
    // Leaflet initialization
    (async () => {
      if (typeof window !== "undefined") {
        const L = (await import("leaflet")).default; // Import Leaflet dynamically
        await import("leaflet/dist/leaflet.css"); // Import CSS

        // Initialize Map
        const map = L.map("map").setView([-5.811662349841844, 106.2782325955825], 13); // Example coordinates

        // Add ArcGIS Imagery Layer
        L.tileLayer(
          "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", // ArcGIS Imagery Tiles
          {
            attribution:
              "&copy; <a href='https://www.esri.com/en-us/arcgis/products/arcgis-online/overview'>ESRI ArcGIS</a> contributors",
          }
        ).addTo(map);

        // Fetch and add GeoJSON
        try {
          const response = await fetch("/peta/petas.geojson"); // Path to GeoJSON file
          if (!response.ok) throw new Error(`Failed to fetch GeoJSON: ${response.statusText}`);
          const data = await response.json();
          L.geoJSON(data).addTo(map);
        } catch (error) {
          console.error("Error loading GeoJSON:", error);
        }
      }
    })();
  }, []);

  return (
    <div id="hero" className="section relative z-0 py-16 md:pt-20 md:pb-20 bg-gray-50">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          {/* Image Section */}
          <div className="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">
            <Image
              src={assets.mangrove1}
              alt="creative agency"
              width={620}
              height={420}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
            <div className="text-center lg:text-left mt-6 lg:mt-0">
              <div className="mb-12">
                <h1 className="text-4xl leading-normal text-black font-bold mb-4">
                  ROVEBOND <br />
                  <span data-toggle="typed" data-options='{"strings": ["Online Marketing", "Web Design", "Mobile Apps", "Brand Identity", "Social Content"]}'></span>
                </h1>
                <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                  "Empowering communities to protect mangroves and unlock the potential of blue carbon through interactive mapping, real-time analysis, and sustainable innovation for a better planet."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div id="map" className="w-full h-96 mt-8 rounded shadow-md"></div>
      </div>
    </div>
  );
};

// Export with dynamic import (disable SSR)
export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
