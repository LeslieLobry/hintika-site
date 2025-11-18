// app/api/video-auth/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { code } = body || {};

  // 🔐 Code secret stocké dans les variables d'environnement
  const validCode = process.env.VIDEO_ACCESS_CODE;

  if (!code || code !== validCode) {
    return NextResponse.json(
      { ok: false, message: "Code incorrect." },
      { status: 401 }
    );
  }

  // ✅ Code OK → on met un cookie pour se souvenir
  const res = NextResponse.json({ ok: true });

  res.cookies.set("hintika_video_ok", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 jours
    path: "/",
  });

  return res;
}
