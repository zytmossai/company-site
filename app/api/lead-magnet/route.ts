import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields" },
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
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header { 
              background: linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #22D3EE 100%); 
              color: white; 
              padding: 30px 20px; 
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content { 
              background: #ffffff; 
              padding: 30px; 
              border: 1px solid #e2e8f0;
              border-radius: 0 0 8px 8px;
            }
            .greeting {
              font-size: 16px;
              margin-bottom: 20px;
            }
            .section {
              margin: 20px 0;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #22D3EE 100%);
              color: white;
              text-decoration: none;
              padding: 14px 28px;
              border-radius: 25px;
              font-weight: bold;
              margin: 20px 0;
              text-align: center;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e2e8f0;
              font-size: 14px;
              color: #64748b;
            }
            .signature {
              margin-top: 20px;
              font-style: italic;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🚀 Your AI Automation Readiness Framework</h1>
          </div>
          
          <div class="content">
            <div class="greeting">
              <p>Hi ${name},</p>
            </div>

            <div class="section">
              <p>Thank you for requesting the <strong>AI Automation Readiness Framework</strong>.</p>
              
              <p>This assessment is designed to help you evaluate whether your organization is prepared for structured automation or advanced AI implementation. It focuses on <strong>strategy, process clarity, data maturity, and operational alignment</strong> — not hype.</p>
            </div>

            <div class="section" style="text-align: center;">
              <a href="https://www.notion.so/AI-Automation-Readiness-Assessment-30d403abc440807c83abf6e7c701c64f" class="cta-button">
                Access Your Checklist
              </a>
            </div>

            <div class="section">
              <p>I recommend reviewing it with your leadership or operations team. <strong>The value is not just in the score, but in the discussion it creates.</strong></p>
              
              <p>If you'd like a second perspective after reviewing it, I'm happy to offer a brief <strong>15-minute clarity call</strong> to discuss your results.</p>
            </div>

            <div class="footer">
              <div class="signature">
                <p>Best regards,<br>
                <strong>ZytmossAI Support</strong></p>
              </div>
              
              <p style="font-size: 12px; color: #94a3b8; margin-top: 20px;">
                You're receiving this email because you requested the AI Automation Readiness Framework from ZytmossAI. 
                If you have any questions, feel free to reply to this email.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to the user
    const { data, error } = await resend.emails.send({
      from: "ZytmossAI <support@zytmossai.com>",
      to: email,
      subject: "Your AI Automation Readiness Framework",
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send checklist email" },
        { status: 500 }
      );
    }

    // Optionally, you could also send a notification to support@zytmossai.com
    // to track new leads, but I'll keep it simple for now

    return NextResponse.json(
      { 
        success: true, 
        message: "Checklist has been sent to your email!",
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
