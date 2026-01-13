import { NextRequest, NextResponse } from "next/server";

export const users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 35 },
  {
    id: 4,
    name: "David",
    email: "david@example.com",
    age: 28,
  },
  { id: 5, name: "Eve", email: "eve@example.com", age: 32 },
  { id: 6, name: "Frank", email: "frank@example.com", age: 29 },
];

// export async function GET(req: NextRequest) {
//   return NextResponse.json({
//     data: "Hello, Next.js 16!",
//   });
// }

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: users,
      total: users.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "faild to get users",
      },
      { status: 500 }
    );
  }
}
