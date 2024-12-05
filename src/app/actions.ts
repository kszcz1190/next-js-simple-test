// /src/app/actions.ts
"use server"; // Oznaczenie pliku jako serwerowego

import { User } from "@/types/user";
import mockData from "../mock-data.json";

// Funkcja do pobierania pojedynczego użytkownika
export async function getSingleUser(userId: string): Promise<User | null> {
  const users: User[] = mockData; // Pobranie danych użytkowników z mockData

  // Znajdź użytkownika o podanym userId
  const user = users.find((user) => user.user_id === userId);

  // Zwróć użytkownika lub null, jeśli nie znaleziono
  return user || null;
}
