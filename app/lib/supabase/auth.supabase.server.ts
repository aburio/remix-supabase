import { json, redirect } from "@remix-run/node";
import { createSupabaseServerClient } from "./supabase.server";

export const signInWithPassword = async (
  request: Request,
  successRedirectPath: string
) => {
  const supabase = createSupabaseServerClient(request);
  const formData = await request.formData();
  const { error } = await supabase.client.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (!error) {
    throw redirect(successRedirectPath, { headers: supabase.headers });
  }

  return json({ error: error.message });
};

export const signOut = async (
  request: Request,
  successRedirectPath: string = "/"
) => {
  const supabase = createSupabaseServerClient(request);
  const { error } = await supabase.client.auth.signOut();

  if (!error) {
    throw redirect(successRedirectPath, { headers: supabase.headers });
  }

  return json({ error: error.message });
};

export const getUser = async (request: Request) => {
  const supabase = createSupabaseServerClient(request);
  const {
    data: { session },
  } = await supabase.client.auth.getSession();

  return session?.user || null;
};

export const isUserLoggedIn = async (request: Request) => {
  const supabase = createSupabaseServerClient(request);

  const {
    data: { user },
  } = await supabase.client.auth.getUser();

  return !!user;
};
