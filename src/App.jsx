import BoardHeader from "./components/BoardHeader";
import StopCard from "./components/StopCard";
import StopModal from "./components/StopModal";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

const truckStops = [
  {
    id: 1,
    name: "Seven Feathers",
    location: "Canyonville, OR",
    highlight:
      "Absolute favorite stop on I-5 for me.  Huge, clean lot, with CLEAN restrooms.  Transportation to the casino via free shuttle for a $2.99 trucker's special steak and eggs!",
    feature: "CLEAN, CLEAN, CLEAN!",
    link: "https://www.sevenfeathers.com",
    image: "/sevenFeathers.jpg",
  },
  {
    id: 2,
    name: "The Big Texan",
    location: "Amarillo, TX",
    highlight:
      "Not a traditional truck stop per se, but they have truck parking and excellent food.  Famous for their 72oz steak challenge!",
    feature: "Small truck lot and iconic restaurant",
    link: "https://www.bigtexan.com/",
    image: "/bigTexan.jpg",
  },
  {
    id: 3,
    name: "Old Outpost Cafe",
    location: "Oak Hills, CA",
    highlight:
      "More than enough truck parking, great food, and next door to a Flying J truckstop.",
    feature: "Sit-down restaurant, MASSIVE parking lot",
    link: "https://outpostcafe.org/",
    image: "/oldOutpost.jpg",
  },
  {
    id: 4,
    name: "Gee Cee's Truck Stop",
    location: "Toledo, WA",
    highlight:
      "Plenty of parking, and a great diner (with some of the best chicken-fried steak I've had on the road).",
    feature: "Big lot, good restaurant",
    link: "https://geeceestruckstop.com/",
    image: "/geeCees.jpg",
  },
  {
    id: 10,
    name: "Mad Greek Cafe",
    location: "Baker, CA",
    highlight:
      "Another hidden gem in Baker, CA.  Great food and a little truck parkign - but walking distance from other parking areas around.",
    feature: "Greek food, excellent gyros, and a fun atmosphere",
    link: "https://www.themadgreek.com",
    image: "/madGreek.jpg",
  },
  {
    id: 6,
    name: "Iowa 80 Truckstop",
    location: "Walcott, IA",
    highlight:
      "The largest truck stop in the world!  Massive stop with parking, showers, and trucking museum.",
    feature: "24/7 diner, fuel, and chrome shop",
    link: "https://iowa80truckstop.com/",
    image: "/iowa80.jpg",
  },
  {
    id: 7,
    name: "Alien Fresh Jerky",
    location: "Baker, CA",
    highlight:
      "Not technically a truck stop, but the entire town has ample truck parking on the road.  Awesome jerky!",
    feature: "Huge alien-themed store with unique snacks",
    link: "https://www.alienfreshjerky.com",
    image: "/alienFresh.jpg",
  },
  {
    id: 8,
    name: "Cabela's HQ",
    location: "Sidney, NE",
    highlight:
      "Truck/RV parking (not sure about overnight), great stop to take a break, get something from the cafe, and shop for outdoor gear.",
    feature: "Parking, cafe, and world-famous outdoor gear store",
    link: "https://www.cabelas.com",
    image: "/cabelaHQ.jpg",
  },
  {
    id: 9,
    name: "Arches National Park",
    location: "Arches National Park, Moab, UT",
    highlight:
      "Truckstop?  No, but if you're through the area there's at least one place to stop, stretch your legs, and enjoy the beauty of the area.",
    feature: "Massive natural arches, part of the National Park Service",
    link: "https://www.nps.gov/arch/planyourvisit/index.htm",
    image: "/arches.jpg",
  },
  {
    id: 10,
    name: "Cabela's",
    location: "Lacey, WA",
    highlight:
      "Hidden spot just off I-5 with a great cafe and ample parking, just south of Tacoma",
    feature: "Great cafe and world-famous outdoor gear store",
    link: "https://www.cabelas.com",
    image: "/cabelasWA.jpg",
  },
];

function App() {
  const [selectedStop, setSelectedStop] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedStop ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [selectedStop]);

  return (
    <main className="app-shell">
      <BoardHeader
        title="Robby's Favorite Truck Stops"
        subtitle="A community board of favorite stops from my time as a truck driver."
      />

      <section className="card-grid" aria-label="Favorite truck stops">
        {truckStops.map((stop) => (
          <StopCard key={stop.id} stop={stop} onOpen={setSelectedStop} />
        ))}
      </section>

      {selectedStop && (
        <StopModal stop={selectedStop} onClose={() => setSelectedStop(null)} />
      )}
      <Footer />
    </main>
  );
}

export default App;
