import { NextRequest, NextResponse } from "next/server";
import { users } from "../../users/route";

interface Params {
  params: Promise<{ id: string }>;
}

export async function PUT(req: NextRequest, { params }: Params) {
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

    const { name, email, age } = await req.json();
    if (!name || !email || !age) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email & age are required",
        },
        { status: 400 }
      );
    }
    users[userIndex] = {
      id: userId,
      name: name,
      email: email,
      age: age,
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
