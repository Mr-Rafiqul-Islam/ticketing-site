import ClientSearchResultsPage from "./ClientSearchResultsPage";


export type SearchPageProps = Promise<{
  from: string;
  to: string;
  date: string;
}>;

export default async function SearchResultsPage(props: {
  params: SearchPageProps;
}) {
  const { from, to, date } = await props.params;

  return <ClientSearchResultsPage from={from} to={to} date={date} />;
}
