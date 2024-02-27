import { Link } from "@remix-run/react";

export default function UserAccount() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl font-bold underline pb-5">Welcome </h1>
        <p>You are now logged in using Supabase Auth.</p>
      </div>
      <div>
        <p>
          <Link className="bg-sky-500 rounded p-2" to="/user">
            User Account
          </Link>{" "}
          to go back to user index
        </p>
      </div>
    </div>
  );
}
