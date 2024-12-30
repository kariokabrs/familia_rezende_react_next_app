import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>Design with</p>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
      />
    </div>
  );
}