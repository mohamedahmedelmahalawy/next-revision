// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const requestHeaders = new Headers(req.headers);
//   const authHeader = requestHeaders.get("Authorization");

//   console.log("Auth Header", authHeader);

//   return NextResponse.json({
//     success: true,
//     data: "Hello from profile",
//   });
// }

// =================revise response header========================
// import { headers } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const headerList = await headers();
//   const authHeader = headerList.get("Authorization");

//   console.log("Auth Header", authHeader);
//   return new Response("<h1>Profile Api Data</h1>", {
//     headers: {
//       "Content-Type": "text/html",
//       "X-Custom-Header": "Next.js Tutorial",
//     },
//   });
// }
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const headerList = await headers();
  const authHeader = headerList.get("Authorization");

  console.log("Auth Header", authHeader);

  const res = NextResponse.json({ message: "Hello from headers" });
  res.headers.set("X-Custom-Header-mohamed", "Next.js Tutorial");
  res.headers.set("cache-control", "no-store");

  return res;
}
