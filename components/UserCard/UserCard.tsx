import Link from "next/link";
// import styles from "./UserCard.module.css";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div
    // à décommenter à la création du fichier css
    // className={styles.card}
    >
      <img
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
        // className={styles.cardImage}
      />
      <div
      // className={styles.cardContent}
      >
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
