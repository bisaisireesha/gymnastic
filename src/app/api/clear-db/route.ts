import { NextResponse } from 'next/server';
import { clearSheet } from '@/lib/excel';
import { cookies } from 'next/headers';

export async function POST() {
  // Check authorization
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token');
  if (!token || token.value !== 'admin-authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await clearSheet('Registrations');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Clear DB Error:', error);
    return NextResponse.json({ error: 'Failed to clear database' }, { status: 500 });
  }
}
