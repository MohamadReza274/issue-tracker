import Pagination from "./Components/Pagination";

export default async function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <h1>Home page</h1>
      <Pagination pageSize={10} itemCount={100} currentPage={1} />
    </div>
  );
}
