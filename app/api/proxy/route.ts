export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  let target = searchParams.get("url");

  if (!target) {
    return new Response("No URL provided.", { status: 400 });
  }

  // Automatically add protocol if missing
  if (!/^https?:\/\//i.test(target)) {
    target = "https://" + target;
  }

  try {
    const res = await fetch(target, { method: "GET" });
    const text = await res.text();
    return new Response(text, { status: 200 });
  } catch (e) {
    return new Response("Error fetching site: " + (e as Error).message, { status: 500 });
  }
}
