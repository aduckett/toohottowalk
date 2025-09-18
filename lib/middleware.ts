import { NextRequest, NextResponse } from 'next/server';

export const config = { matcher: ['/admin/:path*', '/api/admin/:path*'] };

// Parse "Authorization: Basic base64(user:pass)" with Web APIs only
function parseBasicAuth(header: string) {
  try {
    const base64 = header.slice('Basic '.length).trim();
    const decoded = atob(base64); // Edge-safe
    const i = decoded.indexOf(':');
    if (i < 0) return { user: '', pass: '' };
    return { user: decoded.slice(0, i), pass: decoded.slice(i + 1) };
  } catch {
    return { user: '', pass: '' };
  }
}

export function middleware(req: NextRequest) {
  const REQUIRED_U = process.env.ADMIN_USER ?? 'admin';
  const REQUIRED_P = process.env.ADMIN_PASS ?? 'changeme';

  const auth = req.headers.get('authorization') || '';
  if (!auth.startsWith('Basic ')) {
    return new NextResponse('Auth required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="TooHotToWalk Admin"' },
    });
  }

  const { user, pass } = parseBasicAuth(auth);
  if (user !== REQUIRED_U || pass !== REQUIRED_P) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="TooHotToWalk Admin"' },
    });
  }

  return NextResponse.next();
}
