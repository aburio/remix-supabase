import { Form, Link } from "@remix-run/react";

export default function UserIndex() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl font-bold underline pb-5">Welcome </h1>
        <p>You are now logged in using Supabase Auth.</p>
      </div>
      <div>
        <p>
          <Link className="bg-sky-500 rounded p-2" to="/user/account">
            User Account
          </Link>{" "}
          to access your user information
        </p>
      </div>
      <div>
        <p>
          <Form action="/logout" method="post">
            <button className="bg-sky-500 rounded p-2" type="submit">
              Sign Out
            </button>
          </Form>
        </p>
      </div>
    </div>
  );
}
