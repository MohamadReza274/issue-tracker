import Pagination from "./Components/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <h1>Home page</h1>
      <Pagination
        pageSize={10}
        itemCount={100}
        currentPage={parseInt(searchParams.page) || 1}
      />
    </div>
  );
}
