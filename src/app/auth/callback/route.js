import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function GET(request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') ?? '/auth/pending'
  
  if (code) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() { return request.cookies.getAll() },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          },
        },
      }
    )
    
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || requestUrl.origin
      return NextResponse.redirect(`${baseUrl}${next}`)
    }
  }

  // Ha nincs kód, vagy hiba volt, irányítsuk a loginra
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || requestUrl.origin
  return NextResponse.redirect(`${baseUrl}/auth/login?error=InvalidToken`)
}
