import { Status } from "@/lib/types";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = async ({ open, inProgress, closed }: Props) => {
  const issuesData: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In-Porgress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];

  return (
    <div className="flex gap-x-2">
      {issuesData.map((issueData) => (
        <div
          key={issueData.label}
          className="flex flex-col gap-y-2 px-6 py-3  border rounded-md"
        >
          <Link
            href={`/issues?status=${issueData.status}`}
            className="font-medium text-sm"
          >
            {issueData.label}
          </Link>
          <p className="font-bold">{issueData.value}</p>
        </div>
      ))}
    </div>
  );
};

export default IssueSummary;
