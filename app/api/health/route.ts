import { client, db } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const env = {
    MONGODB_URI: !!process.env.MONGODB_URI,
    MONGODB_DB_NAME: !!process.env.MONGODB_DB_NAME,
    BETTER_AUTH_SECRET: !!process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: !!process.env.BETTER_AUTH_URL,
    GOOGLE: !!(
      process.env.GOOGLE_CLIENT_ID &&
      process.env.GOOGLE_CLIENT_SECRET
    ),
    GITHUB: !!(
      process.env.GITHUB_CLIENT_ID &&
      process.env.GITHUB_CLIENT_SECRET
    ),
  };

  try {
    await client.connect();
    await db.command({ ping: 1 });

    return Response.json({
      ok: true,
      database: "MongoDB connected",
      mode: "mongodb",
      env,
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        database:
          error instanceof Error ? error.message : "Database connection failed",
        env,
      },
      { status: 500 }
    );
  }
}
