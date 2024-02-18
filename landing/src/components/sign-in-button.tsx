"use client";

import { auth } from "@/lib/firebase/firebase";
import { Button } from "./ui/button";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useGetUser } from "@/lib/firebase/getUser";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function SignInButton() {
  const user = useGetUser();
  const [signInPending, setSignInPending] = useState(false);
  const [hasAuthenticateduser, setHasAuthenticatedUser] = useState<boolean>();

  useEffect(() => {
    if (typeof window !== undefined) {
      setHasAuthenticatedUser(
        localStorage.getItem("hasAuthenticatedUser") === "yes" ?? false,
      );
    }
  }, [hasAuthenticateduser]);

  const onClickHandler = async () => {
    if (user) {
      await signOut(auth);
      localStorage.removeItem("hasAuthenticatedUser");
      return;
    }
    const provider = new GoogleAuthProvider();
    try {
      setSignInPending(true);
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        localStorage.setItem("hasAuthenticatedUser", "yes");
        setSignInPending(false);
      }
    } catch {
      setSignInPending(false);
    }
  };

  const pending =
    hasAuthenticateduser === undefined ||
    (hasAuthenticateduser && user === undefined) ||
    signInPending;
  const buttonText = user ? user.email : "Sign In & Try!";

  return (
    <Button
      className="flex flex-row md:flex"
      size="lg"
      onClick={onClickHandler}
      disabled={pending}
    >
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {buttonText}
    </Button>
  );
}
