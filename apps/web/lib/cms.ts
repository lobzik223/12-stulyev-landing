const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
const CMS_TOKEN = process.env.CMS_READONLY_TOKEN;

type FetchOptions = {
  tags?: string[];
  draft?: boolean;
};

export async function cmsGet<T>(path: string, opts: FetchOptions = {}): Promise<T> {
  if (!CMS_URL || !CMS_TOKEN) {
    // Нет CMS — на Этапе 1 используем моки в вызвавшем месте.
    throw new Error("CMS not configured");
  }
  const url = new URL(`${CMS_URL.replace(/\/$/, "")}/api/${path.replace(/^\//, "")}`);
  if (opts.draft) url.searchParams.set("publicationState", "preview");
  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${CMS_TOKEN}` },
    next: { tags: opts.tags ?? [] }
  });
  if (!res.ok) throw new Error(`CMS error: ${res.status}`);
  const json = await res.json();
  return json as T;
}

