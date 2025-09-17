import { BASE_URL } from "@/lib/config";

import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();

  try {
    const res = await fetch(`${BASE_URL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data || [], { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        details: error?.response?.data.error || "email already exists",
      },
      { status: error?.response?.status || 500 }
    );
  }
};
