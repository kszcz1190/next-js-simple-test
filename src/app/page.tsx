// /src/app/page.tsx
import { User } from "@/types/user";
import mockData from "../mock-data.json"; // Symulowane dane użytkowników

export default async function Home() {
  // Funkcja do pobierania listy użytkowników
  async function getUsers() {
    return new Promise<User[]>((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 300);
    });
  }

  const data: User[] = await getUsers(); // Pobierz użytkowników

  return (
    <div>
      <h1>Lista użytkowników</h1>
      <ul>
        {data.map((user) => (
          <li key={user.user_id}>
            <a href={`/${user.user_id}`}>{user.name}</a>{" "}
            {/* Link do strony użytkownika */}
          </li>
        ))}
      </ul>
    </div>
  );
}
