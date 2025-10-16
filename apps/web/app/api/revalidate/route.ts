import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json().catch(() => ({}));
    const tags: string[] = Array.isArray(payload?.tags) ? payload.tags : [];

    if (tags.length) {
      for (const t of tags) {
        revalidateTag(String(t));
      }
    }

    return NextResponse.json({ ok: true, revalidated: tags }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

