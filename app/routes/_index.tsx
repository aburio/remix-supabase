import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline pb-5">Welcome to Remix</h1>
      <p className="pb-2">
        This is a Remix app template build with :
        <u className="list-disc list-inside no-underline">
          <li>Remix v2</li>
          <li>Typescript</li>
          <li>TailwindCSS</li>
          <li>Supabase SSR package</li>
        </u>
      </p>
      <p className="pb-2">
        This Remix App include basic function to use Supabase Auth and Database
      </p>
      <p className="pb-2">
        You can start editing it by opening <code>app/routes/index.tsx</code>.
      </p>
      <p className="pb-2">
        <Link className="bg-sky-500 rounded p-2" to="/login">
          Login
        </Link>{" "}
        to access your user account
      </p>
    </div>
  );
}
