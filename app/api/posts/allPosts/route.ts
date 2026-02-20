import { BASE_URL } from "@/lib/config";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "20";

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";

  try {
    const response = await axios.get(`${BASE_URL}/posts`, {
      params: { limit, page },
      headers: { token },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return NextResponse.json({ message: axiosError.response?.data || "Error fetching posts" }, { status: axiosError.response?.status || 500 });
    }
    return NextResponse.json({ message: "Error fetching posts" }, { status: 500 });
  }
};
