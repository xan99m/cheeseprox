export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("url");

  if (!target) {
    return new Response("Missing ?url=", { status: 400 });
  }

  try {
    const response = await fetch(target);
    const html = await response.text();

    return new Response(html, {
      status: 200,
      headers: { "Content-Type": "text/html" }
    });

  } catch (err) {
    return new Response("Error fetching site: " + err.message, {
      status: 500
    });
  }
}
