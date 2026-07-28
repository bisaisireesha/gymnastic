import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const expectedUser = process.env.ADMIN_USER || 'admin@example';
    const expectedPass = process.env.ADMIN_PASS || 'admin123';

    if (username === expectedUser && password === expectedPass) {
      // Set secure HTTP-only cookie
      const cookieStore = await cookies();
      cookieStore.set({
        name: 'auth-token',
        value: 'admin-authenticated',
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 // 1 day
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to authenticate' }, { status: 500 });
  }
}
