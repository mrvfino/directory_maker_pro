import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { auth } from "./firebase";

export function useGetUser() {
  const [user, setUser] = useState<User>();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log("UNSUB auth state change user", user);
      console.log("UNSUB auth state change authUser", authUser);
      setUser(authUser ?? undefined);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("auth state change user", user);
      console.log("auth state change authUser", user);
      if (user === undefined) return;

      // refresh when user changed to ease testing
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });
  }, [user]);

  return user;
}
