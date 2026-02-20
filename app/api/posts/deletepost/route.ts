import { BASE_URL } from "@/lib/config";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request) => {
  try {
    const { id } = await req.json();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || "";

    const response = await axios.delete(`${BASE_URL}/posts/${id}`, {
      headers: {
        token,
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return NextResponse.json({ message: "Something went wrong", error: axiosError.response?.data }, { status: axiosError.response?.status || 500 });
    }
    return NextResponse.json({ message: error.message || "Something went wrong" }, { status: 500 });
  }
};
