export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("url");

  if (!target) {
    return new Response("No URL provided.", { status: 400 });
  }

  try {
    const res = await fetch(target, { method: "GET" });
    const text = await res.text();
    return new Response(text, { status: 200 });
  } catch (e) {
    return new Response("Error fetching site.", { status: 500 });
  }
}
