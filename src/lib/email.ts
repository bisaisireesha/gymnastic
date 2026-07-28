import nodemailer from 'nodemailer';

export async function sendNotificationEmail(
  subject: string,
  messageText: string,
  attachmentPath?: string
) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !ADMIN_EMAIL) {
    console.warn('SMTP configuration is missing. Skipping email notification.');
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587'),
    secure: parseInt(SMTP_PORT || '587') === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const attachments = attachmentPath
    ? [
        {
          filename: 'database.xlsx',
          path: attachmentPath,
        },
      ]
    : [];

  const mailOptions = {
    from: SMTP_USER,
    to: ADMIN_EMAIL,
    subject,
    text: messageText,
    attachments,
  };

  await transporter.sendMail(mailOptions);
  return true;
}
