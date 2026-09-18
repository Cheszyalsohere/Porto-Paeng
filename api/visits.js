// Penghitung kunjungan sederhana, disimpan di Upstash Redis (Vercel Storage).
// POST = tambah satu kunjungan, GET = baca total.
const KEY = "porto:visits";

module.exports = async (req, res) => {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  res.setHeader("Cache-Control", "no-store");

  if (!url || !token) {
    res.status(503).json({ error: "counter storage not configured" });
    return;
  }
  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  const command = req.method === "POST" ? "incr" : "get";
  try {
    const r = await fetch(`${url}/${command}/${KEY}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!r.ok) throw new Error(`redis ${r.status}`);
    const { result } = await r.json();
    res.status(200).json({ total: Number(result) || 0 });
  } catch (err) {
    res.status(502).json({ error: "counter unavailable" });
  }
};
