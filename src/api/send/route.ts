import { Resend } from "resend";
import EmailTemplate from "src/components/email/email-template.component";

const resend = new Resend(process.env.RESEND_API_KEY);
// console.log("🚀 ~ resend:", resend);

export type TSendEmailPost = {
  userEmail: string;
  tokenUrlParam: string;
};

export async function postEmail({ tokenUrlParam, userEmail }: TSendEmailPost) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Gaël <onboarding@resend.dev>",
      to: userEmail,
      subject: "Connexion au dashboard du restaurant Van Long",
      html: EmailTemplate({ host: "Restaurant Van Long", url: tokenUrlParam }),
    });
    console.log("🚀 ~ postEmail ~ data:", data);

    if (error) {
      console.log("🚀 ~ postEmail ~ error:", error);
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    console.log("🚀 ~ postEmail ~ error:", error);
    return Response.json({ error }, { status: 500 });
  }
}
