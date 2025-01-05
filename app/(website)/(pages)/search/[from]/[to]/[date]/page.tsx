import React from "react";
import FilterSidebar from "@/components/search/FilterSidebar";
import SortOptions from "@/components/search/SortOptions";
import Pagination from "@/components/search/Pagination";
import SearchBar from "@/components/SearchBar";
import BusCard from "@/components/search/BusCard";
interface SearchParams {
  params: { from: string; to: string; date: string };
}

const SearchResultsPage = async ({ params }: SearchParams) => {
  const { from, to, date } = params;
  // const flights = await fetchFlights(from, to, date);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <SearchBar />
      <section className="py-1">
      <div className="search-container">
        <div className="flex">
          <FilterSidebar />
          <main className="flex-1 p-4">
            <SortOptions />
            <div className="grid grid-cols-1 gap-4">
              <BusCard />
              <BusCard />
              <BusCard />
            </div>
            <Pagination />
          </main>
        </div>
      </div>
      </section>
    </div>
  );
};

export default SearchResultsPage;
