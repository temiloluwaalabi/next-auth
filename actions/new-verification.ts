"use server";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { db } from "@/lib/db";

export const NewVerification = async (token: string) => {
  const exisitingToken = await getVerificationTokenByToken(token);

  if (!exisitingToken) {
    return { error: "Token doesn't exist" };
  }

  // @ts-ignore
  const hasExpired = new Date(exisitingToken?.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  // @ts-ignore
  const exisitingUser = await getUserByEmail(exisitingToken.email);

  if (!exisitingUser) {
    return { error: "Email does not exist" };
  }

  await db.user.update({
    where: {
      id: exisitingUser.id,
    },
    data: {
      emailVerified: new Date(),
      // @ts-ignore
      email: exisitingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: {
      // @ts-ignore
      id: exisitingToken.id,
    },
  });

  return { success: "Email Verified" };
};
