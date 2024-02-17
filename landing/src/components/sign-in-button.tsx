"use client";

import { auth } from "@/lib/firebase/firebase";
import { Button } from "./ui/button";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { getUser } from "@/lib/firebase/getUser";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function SignInButton() {
  const user = getUser();
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(!user && localStorage.getItem("login") == "pending");
  }, [user]);

  const onClickHandler = async () => {
    if (user?.email) {
      localStorage.removeItem("login");
      await signOut(auth);
      return;
    }
    const provider = new GoogleAuthProvider();
    localStorage.setItem("login", "pending");
    await signInWithRedirect(auth, provider).catch((error) => {
      alert(error);
      localStorage.removeItem("login");
    });
  };

  return (
    <Button
      className="flex-row md:flex"
      size="lg"
      onClick={onClickHandler}
      disabled={pending}
    >
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Loading" : user?.email ?? "Sign In with Google"}
    </Button>
  );
}
