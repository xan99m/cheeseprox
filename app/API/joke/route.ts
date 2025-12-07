// /app/api/joke/route.ts
import { NextResponse } from "next/server";

const jokes = [
  "Why did the cheese cross the road? To get to the grate side!",
  "What type of cheese is always smiling? Grin-dam!",
  "What cheese can you disguise yourself with? Mascarpone!",
  "What cheese is made backward? Edam!",
  "Why did the cheddar fail school? It was too sharp!",
  "What cheese do you use to coax a bear? Camembert!",
  "Why don’t cheeses ever get lost? They always follow the rind!",
  "What cheese cries the most? Blue cheese.",
  "Which cheese lives in a church? St. Brie!",
  "Why was the cheese always calm? It had mature vibes.",
];

export async function GET() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  return NextResponse.json({ joke });
}
