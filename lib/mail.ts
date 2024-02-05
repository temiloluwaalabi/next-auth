import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password!",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #d4edda; padding: 20px;">
      <h2>Reset your passord</h2>
      <p><strong>Reset Password Link:</strong> Click <a href="${resetLink}">here</a> to reset your password.</p>
    </div>
        
        `,
  });
};
export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #d4edda; padding: 20px;">
      <h2>Confirm your email</h2>
      <p><strong>Verification Link:</strong> Click <a href="${confirmLink}">here</a> to confirm email.</p>
    </div>
        
        `,
  });
};
export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Two Factor Confirmation Link",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #d4edda; padding: 20px;">
      <h2>2FA Code</h2>
      <p>Your 2FA code is: <strong>${token}</strong></p>
    </div>
        
        `,
  });
};
