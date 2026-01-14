import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  //   const theme = req.cookies.get("theme");
  //   console.log("Cookies", theme);

  const cookieStore = await cookies();
  //   const resultsPerPage = cookieStore.get("resultsPerPage");

  //   cookieStore.set("score", "100");
  cookieStore.delete("try");

  //   console.log("Cookies", resultsPerPage);

  //   return new Response("Setting Cookie", {
  //     headers: {
  //       //   "Set-Cookie": "theme=dark",
  //       "Set-Cookie": "resultsPerPage=20",
  //     },
  //   });
  //
  //    return NextResponse.json({
  //     message: "Cookie Set!",
  //   });
  return NextResponse.json({
    message: "Cookie Deleted!",
  });
}
