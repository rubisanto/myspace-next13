import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  // proteger si l'utilisateur n'est pas connecté
  // const session = await getServerSession();
  // if (!session) {
  //   redirect("/api/auth/signin");
  // }

  return <main></main>;
}
