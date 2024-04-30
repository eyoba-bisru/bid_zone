import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { SearchUsers } from "./_search-users";
import { clerkClient } from "@clerk/nextjs/server";

export default async function AdminDashboard(params: {
  searchParams: { search?: string };
}) {
  if (!checkRole("admin")) {
    redirect("/");
  }

  const query = params.searchParams.search;

  const users = query ? await clerkClient.users.getUserList({ query }) : [];

  return (
    <>
      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the &apos;admin&apos; role.</p>

      <SearchUsers />
    </>
  );
}
