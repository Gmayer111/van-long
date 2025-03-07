"use client";
import { redirect, useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { signin } from "src/app/actions/auth/auth";
import { checkFormatMail } from "src/utils/string-formatter";

const SigninPage = () => {
  const { mail }: { mail: string } = useParams();
  const router = useRouter();

  const { mailFormatted, isMail } = checkFormatMail(mail);

  if (!isMail) {
    router.push("/fr/carte");
  }

  useEffect(() => {
    if (mailFormatted) {
      signin(mailFormatted);
      redirect("/fr");
    }
  }, [mailFormatted]);

  return <div>Connexion</div>;
};

export default SigninPage;
