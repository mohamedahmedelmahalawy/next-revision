import { NextRequest, NextResponse } from "next/server";
import { users } from "../../users/route";

interface Params {
  params: Promise<{ id: string }>;
}

export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const userId = parseInt(id);
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: "User Not found",
        },
        { status: 404 }
      );
    }

    const body = await req.json();

    users[userIndex] = {
      ...users[userIndex],
      ...body,
      id: userId,
    };
    return NextResponse.json({
      success: true,
      data: users[userIndex],
      message: "User updated",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Faild to update user",
      },
      { status: 500 }
    );
  }
}
