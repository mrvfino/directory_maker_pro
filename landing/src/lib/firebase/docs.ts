import { doc } from "firebase/firestore/lite";
import { db } from "./firebase";

export const privateSiteSettings = (userId: string, siteId: string) =>
  doc(db, `users/${userId}/sites/${siteId}/private/settings`);
