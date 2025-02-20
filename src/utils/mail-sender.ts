import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

type TMailSenderProps = {
  userEmail: string | undefined;
  tokenUrlParam: string | undefined;
};

function MailSender({ userEmail, tokenUrlParam }: TMailSenderProps) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL_FROM,
    to: userEmail,
    subject: "Connexion au dashboard du restaurant Van Long",
    html: html({
      url: `${process.env.REDIRECT_USER_URL}?token=${tokenUrlParam}`,
      host: "Restaurant Van Long",
    }),
  };

  transporter.sendMail(mailOptions);
}

function html(params: { url: string | undefined; host: string }) {
  const { host, url } = params;
  const escapedHost = host.replace(/\./g, "&#8203;.");

  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: "#346df1",
    buttonBorder: "#346df1",
    buttonText: "#fff",
  };
  return `
  <body style="background: ${color.background};">
    <table width="100%" border="0" cellspacing="20" cellpadding="0"
      style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
      <tr>
        <td align="center"
          style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          Sign in to <strong>${escapedHost}</strong>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                  target="_blank"
                  style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                  in</a></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center"
          style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          If you did not request this email you can safely ignore it.
        </td>
      </tr>
    </table>
  </body>
  `;
}

export { MailSender };
