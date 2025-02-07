import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Using environment variables for security
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const targetPhone = process.env.TARGET_PHONE_NUMBER;

// Only initialize if credentials are available
const client = accountSid && authToken ? twilio(accountSid, authToken) : null;

export async function POST(request: Request) {
  try {
    if (!client || !twilioPhone || !targetPhone) {
      throw new Error('Missing Twilio configuration');
    }

    const { name, email, phone, message } = await request.json();

    const smsMessage = `
New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
`;

    const result = await client.messages.create({
      body: smsMessage,
      from: twilioPhone,
      to: targetPhone
    });

    return NextResponse.json({ success: true, messageId: result.sid });
  } catch (error) {
    console.error('Error sending SMS:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
