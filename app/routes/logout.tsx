import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { signOut } from "~/lib/supabase/auth.supabase.server";

export const loader = async () => redirect("/");

export const action = async ({ request }: ActionFunctionArgs) => signOut(request);
