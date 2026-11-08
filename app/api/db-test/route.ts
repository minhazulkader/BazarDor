import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export async function GET() {
  console.log("DB TEST ROUTE HIT");

  try {
    await connectDB();

    return NextResponse.json({
      ok: true,
      message: "MongoDB connected successfully!",
    });
    } catch (error) {
    console.error("FULL MONGODB ERROR:", error);

    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : String(error),
        stack:
          error instanceof Error ? error.stack : null,
      },
      { status: 500 }
    );
  }
}