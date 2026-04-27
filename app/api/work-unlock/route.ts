import { NextRequest, NextResponse } from 'next/server';

const PASSWORD = 'letsworktogether';

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password === PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('work_access', 'granted', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
      sameSite: 'lax',
    });
    return response;
  }

  return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
}
