"use client";
import { useParams } from "next/navigation";
import { handleSignin } from "src/app/admin/actions/test";

const page = () => {
  const urlEmailParam = useParams();
  handleSignin({ urlParams: urlEmailParam });
};

export default page;
