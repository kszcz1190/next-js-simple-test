// /src/app/[userId]/page-client.tsx
"use client"; // Oznaczenie komponentu jako klientowego (renderowanego po stronie klienta)

import { useQuery } from "@tanstack/react-query"; // Import react-query
import { User } from "@/types/user";
import { getSingleUser } from "@/app/actions"; // Funkcja do pobierania użytkownika

// Funkcja do pobierania użytkownika za pomocą react-query
async function fetchUser(userId: string): Promise<User | null> {
  const user = await getSingleUser(userId);
  return user;
}

export default function PageClient({ userId }: { userId: string }) {
  const { data, error, isLoading } = useQuery(
    ["user", userId], // Klucz zapytania
    () => fetchUser(userId), // Funkcja do pobrania danych
    { retry: false } // Opcje zapytania
  );

  if (isLoading) return <div>Ładowanie...</div>; // Wyświetl "Loading..." podczas ładowania
  if (error) return <div>Wystąpił błąd</div>; // Obsługuje błąd

  if (!data) return <div>Użytkownik nie znaleziony</div>; // Jeśli użytkownik nie został znaleziony

  return (
    <div>
      <h1>Witaj użytkowniku o id = {userId}</h1>
      <p>Imię: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}
