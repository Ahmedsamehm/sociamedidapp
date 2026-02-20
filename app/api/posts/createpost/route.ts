import { BASE_URL } from "@/lib/config";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";

  try {
    const formData = await req.formData();

    const response = await axios.post(`${BASE_URL}/posts`, formData, {
      headers: {
        token,
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return NextResponse.json({ message: axiosError.response?.data || "Error creating post" }, { status: axiosError.response?.status || 500 });
    }
    return NextResponse.json({ message: error.message || "Error creating post" }, { status: 500 });
  }
};
