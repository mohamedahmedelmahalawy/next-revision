import { NextRequest, NextResponse } from "next/server";
import { users } from "../route";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Params) {
  const { id } = await params;
  const userId = parseInt(id);
  const user = users.find((u) => u.id === userId);
  try {
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "faild to get user",
      },
      { status: 500 }
    );
  }
}
