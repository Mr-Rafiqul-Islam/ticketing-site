import About from "@/components/About";
import Banner from "@/components/Banner";
import BusCard from "@/components/search/BusCard";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  return (
      <main className="font-[family-name:var(--font-geist-sans)]">
        <Banner/>
        <SearchBar/>
        <About/>
        <BusCard/>
      </main>
  );
}
