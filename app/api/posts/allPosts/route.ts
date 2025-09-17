import { BASE_URL } from "@/lib/config";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "20";

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";

  try {
    const res = await fetch(`${BASE_URL}/posts?limit=${limit}&page=${page}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", token },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching posts" }, { status: 500 });
  }
};
