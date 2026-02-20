import { BASE_URL } from "@/lib/config";
import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const response = await axios.post(`${BASE_URL}/users/signin`, body);
    const data = response.data;

    const res = NextResponse.json({ message: "success", data }, { status: 200 });
    res.cookies.set({
      name: "token",
      value: data.token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
      sameSite: "strict",
    });

    return res;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message?: string; error?: string }>;
      const status = axiosError.response?.status || 500;

      if (status === 502) {
        return NextResponse.json({ details: "The service is currently unavailable (502). Please try again soon." }, { status: 502 });
      }

      const backendMessage = axiosError.response?.data?.message || axiosError.response?.data?.error || "email or password incorrect";
      return NextResponse.json({ details: backendMessage }, { status });
    }

    return NextResponse.json({ details: error.message || "Internal Server Error" }, { status: 500 });
  }
};
