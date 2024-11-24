import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount <= 1) {
    return null;
  }
  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">{pageCount}</span> of{" "}
          <span className="font-medium">{itemCount}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between gap-x-2 sm:justify-end">
        <button
          disabled={currentPage === 1}
          className="relative inline-flex disabled:cursor-not-allowed items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          <ChevronDoubleLeftIcon className="w-5 h-5" />
        </button>
        <button
          disabled={currentPage === 1}
          className="relative inline-flex disabled:cursor-not-allowed items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          disabled={currentPage === pageCount}
          className="relative ml-3 disabled:cursor-not-allowed inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
        <button
          disabled={currentPage === pageCount}
          className="relative disabled:cursor-not-allowed inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          <ChevronDoubleRightIcon className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
