import { BASE_URL } from "@/lib/config";
import axios, { AxiosError } from "axios";

import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();

  try {
    const { data } = await axios.post(`${BASE_URL}/users/signin`, body);

    const response = NextResponse.json({ message: "success" }, { status: 200 });
    response.cookies.set({
      name: "token",
      value: data.token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
      sameSite: "strict",
      // secure: process.env.NODE_ENV === "production",
    });

    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    return NextResponse.json(
      {
        details: axiosError.response?.data?.error || "email or password  incorrect",
      },
      { status: axiosError?.response?.status || 500 }
    );
  }
};
