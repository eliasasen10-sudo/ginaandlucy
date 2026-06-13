import { NextRequest, NextResponse } from 'next/server'

/**
 * TikTok OAuth callback. TikTok redirects here with ?code=... after the user
 * authorizes the app. We display the code so it can be pasted into the local
 * auth script (tools/tiktok-auth.js --code <code>), which holds the client
 * secret and exchanges it for tokens. The code is short-lived.
 */
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')
  const error = req.nextUrl.searchParams.get('error')

  if (error) {
    return new NextResponse(`<h1>OAuth error: ${error}</h1>`, {
      status: 400,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }
  if (!code) {
    return new NextResponse('<h1>No code received</h1>', {
      status: 400,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }

  const html = `<!doctype html><html><head><meta charset="utf-8"><title>TikTok Auth</title>
  <style>body{font-family:system-ui;background:#0e0e0e;color:#fff;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0}
  .box{max-width:560px;padding:32px;text-align:center}code{display:block;background:#1c1c1c;border:1px solid #333;border-radius:10px;padding:16px;margin:20px 0;word-break:break-all;color:#ff3e8a;font-size:14px}
  button{background:#ff3e8a;color:#fff;border:0;border-radius:8px;padding:10px 20px;font-weight:600;cursor:pointer}</style></head>
  <body><div class="box"><h1>TikTok autorisiert</h1>
  <p>Kopiere diesen Code und fuehre lokal aus:</p>
  <code id="c">${code}</code>
  <p style="color:#888">node tools/tiktok-auth.js --code &lt;code&gt;</p>
  <button onclick="navigator.clipboard.writeText(document.getElementById('c').innerText)">Code kopieren</button>
  </div></body></html>`

  return new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
}
