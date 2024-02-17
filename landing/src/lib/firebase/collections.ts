import { collection, collectionGroup } from "firebase/firestore/lite";
import { db } from "./firebase";

export const users = collection(db, `users`);
export const sites = collectionGroup(db, `sites`);
