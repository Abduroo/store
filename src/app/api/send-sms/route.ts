import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Here you can implement your own message handling logic
    // For example, you could:
    // 1. Send an email
    // 2. Store in a database
    // 3. Forward to a messaging service
    
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Message received successfully'
    });
  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
