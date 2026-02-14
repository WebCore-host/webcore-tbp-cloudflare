
export const onRequestPost = async (context) => {
  try {
    const data = await context.request.json();
    const { name, phone, email, service, message } = data;

    // Validation
    if (!name || !phone || !email) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    /**
     * NOTE: Cloudflare does not have a native mail() function like PHP.
     * You should use an external API here (e.g., Resend, SendGrid, or Mailgun).
     * 
     * Example with Resend:
     * const res = await fetch("https://api.resend.com/emails", {
     *   method: "POST",
     *   headers: {
     *     "Authorization": `Bearer ${context.env.RESEND_API_KEY}`,
     *     "Content-Type": "application/json",
     *   },
     *   body: JSON.stringify({
     *     from: "Texas Built Website <noreply@texasbuiltplumbing.com>",
     *     to: "webcore112@gmail.com",
     *     subject: `New Estimate Request: ${service} from ${name}`,
     *     text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
     *   }),
     * });
     */

    // For now, we return a success response to keep the UI working.
    // In production, you would perform the fetch to your email provider above.
    console.log("Form submission received:", data);

    return new Response(JSON.stringify({ message: "Submission received successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Internal Server Error", error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
