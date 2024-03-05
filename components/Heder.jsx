import Link from "next/link";


export const Header = () => {
  return (
    <div>
      <Link href={"/performance"}>Performance</Link>
      <Link href={"/scale"}>Scale</Link>
      <Link href={"/"}>Home</Link>
    </div>
  );
};
