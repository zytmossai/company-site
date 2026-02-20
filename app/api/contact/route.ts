import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, industry, companySize, challenge, budget, timeline } = body;

    // Validate required fields
    if (!name || !email || !challenge) {
      return NextResponse.json(
        { error: "Name, email, and challenge are required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #22D3EE 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            .section { margin-bottom: 20px; padding: 15px; background: white; border-radius: 6px; border-left: 4px solid #6366F1; }
            .section h3 { margin: 0 0 10px 0; color: #1e293b; font-size: 16px; }
            .field { margin: 8px 0; }
            .label { font-weight: bold; color: #475569; }
            .value { color: #1e293b; }
            .challenge-box { background: #f1f5f9; padding: 15px; border-radius: 6px; margin-top: 10px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Inquiry</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">From ${name}${company ? ` at ${company}` : ''}</p>
            </div>
            
            <div class="content">
              <div class="section">
                <h3>📋 Contact Information</h3>
                <div class="field">
                  <span class="label">Name:</span> 
                  <span class="value">${name}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span> 
                  <span class="value">${email}</span>
                </div>
                ${company ? `<div class="field">
                  <span class="label">Company:</span> 
                  <span class="value">${company}</span>
                </div>` : ''}
                ${industry ? `<div class="field">
                  <span class="label">Industry:</span> 
                  <span class="value">${industry}</span>
                </div>` : ''}
              </div>

              <div class="section">
                <h3>💼 Business Profile</h3>
                ${companySize ? `<div class="field">
                  <span class="label">Company Size:</span> 
                  <span class="value">${companySize}</span>
                </div>` : ''}
                ${budget ? `<div class="field">
                  <span class="label">Budget Range:</span> 
                  <span class="value">${budget}</span>
                </div>` : ''}
                ${timeline ? `<div class="field">
                  <span class="label">Timeline:</span> 
                  <span class="value">${timeline}</span>
                </div>` : ''}
              </div>

              <div class="section">
                <h3>🎯 Current Challenge</h3>
                <div class="challenge-box">
                  ${challenge.replace(/\n/g, '<br>')}
                </div>
              </div>

              <div class="footer">
                <p>This inquiry was submitted through the ZytmossAI contact form.</p>
                <p>Submitted at: ${new Date().toLocaleString('en-US', { 
                  timeZone: 'UTC',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    const { data, error } = await resend.emails.send({
      from: "ZytmossAI Contact Form <support@zytmossai.com>",
      to: "support@zytmossai.com",
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` at ${company}` : ''}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Your inquiry has been sent successfully!",
        id: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
