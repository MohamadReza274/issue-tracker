import AddIssueButton from "@/app/issues/AddIssueButton";
import IssuesTable, {
  IssueQuery,
  tableHeaders,
} from "@/app/issues/IssuesTable";
import { statuses } from "@/lib/constants";
import prisma from "@/lib/db";
import Pagination from "../Components/Pagination";
import { auth } from "../auth";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const session = await auth();

  const status = statuses.includes(searchParams.status)
    ? { status: searchParams.status }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 5;

  const where = status;

  const sortOrder = tableHeaders
    .map((header) => header.sortOrder)
    .includes(searchParams.sortOrder)
    ? { [searchParams.sortOrder]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    orderBy: sortOrder,
    where,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where });

  if (issues.length === 0) {
    return (
      <div className={"p-8 text-gray-700 dark:text-gray-300"}>
        <h2 className={"text-2xl"}>There is no issue</h2>
      </div>
    );
  }
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 dark:text-white dark:bg-gray-800 rounded-lg p-4">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Issues
            </h1>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              A list of all the issues in your system including their title,
              description, status and createdAt.
            </p>
          </div>
          {session && (
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              {/*Add issue*/}
              <AddIssueButton />
            </div>
          )}
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              {/*Issue Table*/}
              <IssuesTable searchParams={searchParams} issues={issues} />
              <Pagination
                pageSize={pageSize}
                currentPage={page}
                itemCount={issueCount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuesPage;
