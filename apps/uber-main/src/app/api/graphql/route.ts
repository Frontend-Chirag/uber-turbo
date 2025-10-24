import { handler } from "@/lib/apollo/apollo-server";
import { NextRequest } from "next/server";

// Handle both POST and GET
export async function POST(request: NextRequest) {
  return handler(request);
}

export async function GET(request: NextRequest) {
  return handler(request);
}
