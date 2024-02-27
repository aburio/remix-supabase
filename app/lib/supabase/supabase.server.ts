import { createServerClient, parse, serialize } from "@supabase/ssr";

export function createSupabaseServerClient(request: Request) {
  const cookies = parse(request.headers.get("Cookie") ?? "");
  const supabase = {
    headers: new Headers(),
    client: createServerClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(key) {
            return cookies[key];
          },
          set(key, value, options) {
            supabase.headers.append(
              "Set-Cookie",
              serialize(key, value, options)
            );
          },
          remove(key, options) {
            supabase.headers.append("Set-Cookie", serialize(key, "", options));
          },
        },
      }
    ),
  };

  return supabase;
}
