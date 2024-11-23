"use client";
import apiClient from "@/lib/apiClient";
import { useQuery } from "@tanstack/react-query";

const fetchIssues = async (filter?: string) => {
  const response = await apiClient.get(`/issues?filterStatus=${filter}`);
  return await response.data;
};

const useIssues = (filter?: string) => {
  const {
    data: issues,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["issues"],
    queryFn: () => fetchIssues(filter),
  });
  return { issues, isLoading, error };
};

export default useIssues;
