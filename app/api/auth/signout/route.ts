import { NextResponse } from "next/server";

export const DELETE = async () => {
  try {
    const response = NextResponse.json({ message: "success" }, { status: 200 });

    response.cookies.delete("token");
    response.cookies.delete("userId");
    return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        details: error.message || "something went wrong",
      },
      { status: 500 },
    );
  }
};
