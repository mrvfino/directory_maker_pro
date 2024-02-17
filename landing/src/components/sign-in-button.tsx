"use client";

import { auth } from "@/lib/firebase/firebase";
import { Button } from "./ui/button";
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { getUser } from "@/lib/firebase/getUser";
import { Loader2 } from "lucide-react";

export default function SignInButton() {
  const user = getUser();
  const pendingLogin =
    typeof window == "undefined" ||
    (!user && localStorage.getItem("login") == "pending");

  const onClickHandler = async () => {
    if (user?.email) {
      localStorage.removeItem("login");
      await signOut(auth);
      return;
    }
    const provider = new GoogleAuthProvider();
    localStorage.setItem("login", "pending");
    await signInWithRedirect(auth, provider).catch(() => {
      localStorage.removeItem("login");
    });
  };

  return (
    <Button
      className="hidden flex-row md:flex"
      size="lg"
      onClick={onClickHandler}
      disabled={pendingLogin}
    >
      {pendingLogin && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pendingLogin ? "Loading" : user?.email ?? "Sign In with Google"}
    </Button>
  );
}
