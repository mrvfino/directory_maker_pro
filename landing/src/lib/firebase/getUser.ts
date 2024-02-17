import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { auth } from "./firebase";

export function getUser() {
  const [user, setUser] = useState<User>();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser ?? undefined);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (user === undefined) return;

      // refresh when user changed to ease testing
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });
  }, [user]);

  return user;
}
