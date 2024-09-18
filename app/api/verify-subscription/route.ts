import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(request: Request) {
  const { sessionId } = await request.json()

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status === 'paid') {
      return NextResponse.json({ 
        success: true, 
        userId: session.client_reference_id 
      })
    } else {
      return NextResponse.json({ success: false })
    }
  } catch (error) {
    console.error('Error verifying subscription:', error)
    return NextResponse.json({ error: 'Error verifying subscription' }, { status: 500 })
  }
}