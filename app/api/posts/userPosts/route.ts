import { BASE_URL } from "@/lib/config";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";
  const userId = cookieStore.get("userId")?.value;
  const res = await fetch(`${BASE_URL}/users/${userId}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });
  const data = await res.json();
  return NextResponse.json(data, { status: 200 });
};
