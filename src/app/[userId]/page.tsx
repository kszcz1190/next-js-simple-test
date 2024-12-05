// /src/app/[userId]/page.tsx
import { User } from "@/types/user";
import { getSingleUser } from "@/app/actions"; // Funkcja do pobierania pojedynczego użytkownika

export default async function UserPage({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  const user: User | null = await getSingleUser(userId);

  // Sprawdzenie, czy użytkownik został znaleziony
  if (!user) {
    return <div>Użytkownik nie znaleziony</div>;
  }

  return (
    <div>
      <h1>Witaj użytkowniku o id = {userId}</h1>
      <p>Imię: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
