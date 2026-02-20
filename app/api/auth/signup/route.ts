// app/api/auth/signup/route.ts
import { BASE_URL } from "@/lib/config";
import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      name: body.name,
      email: body.email,
      password: body.password,
      rePassword: body.rePassword,
      phone: body.phone,
    };
    const response = await axios.post(`${BASE_URL}/users/signup`, payload);

    return NextResponse.json(response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const status = axiosError.response?.status || 500;
      const errorMessage = axiosError.response?.data?.message || "Signup failed";

      return NextResponse.json({ details: errorMessage }, { status });
    }

    console.error("Next.js API Error:", error);
    return NextResponse.json({ details: "Server connection failed" }, { status: 502 });
  }
}
