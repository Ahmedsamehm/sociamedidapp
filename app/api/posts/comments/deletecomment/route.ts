import { BASE_URL } from "@/lib/config";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const DELETE = async (res: Response) => {
  const { id } = await res.json();

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  try {
    const { data } = await axios.delete(`${BASE_URL}/comments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token,
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "Something went wrong", error: error.response?.data }, { status: error.response?.status || 500 });
  }
};
