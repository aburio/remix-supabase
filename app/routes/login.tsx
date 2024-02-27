import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { isUserLoggedIn, signInWithPassword } from "~/lib/supabase/auth.supabase.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (await isUserLoggedIn(request)) {
    throw redirect("/user");
  }

  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const error = await signInWithPassword(request, "/user");

  return error;
};

export default function SignIn() {
  const actionResponse = useActionData<typeof action>();
  return (
    <>
      <Form method="post">
        {!actionResponse ? null : <h3>{actionResponse?.error}</h3>}
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <br />
        <button type="submit">Sign In</button>
      </Form>
    </>
  );
}
