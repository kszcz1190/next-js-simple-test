"use server";

import { User } from "@/types/user";
import mockData from "../mock-data.json";

// plik serwerowy, który służy do wykonywania ackji na serwerze
// więcej na: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

// wykonaj tę funkcję aby pobrać pojedynczego użytkownika
// lub zwróć null jeśli użytkownik nie istnieje

export const getSingleUser = async (userId: User["user_id"]) => {
  const users: User[] = mockData;
  const user = users.find((user) => user.user_id === userId);

  //error handling
  if (!user) {
    return null;
  }

  //Zostaw to tak jak jest aby zasymulować pobieranie danych z bazy danych, tylko odkomentuj:)
  return new Promise<User | null>((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 500);
  });
};
