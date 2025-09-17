import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export const DELETE = async () => {
  try {
    const response = NextResponse.json({ message: "success" }, { status: 200 });

    response.cookies.delete("token");
    response.cookies.delete("userId");
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    return NextResponse.json(
      {
        details: axiosError.message || "something went wrong",
      },
      { status: axiosError?.response?.status || 500 }
    );
  }
};
