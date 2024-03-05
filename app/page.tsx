import Image from "next/image";
import Link from "next/link";
import HomeImg from "@/public/home.jpg"

export default function Home() {
  return (
    <div>
      <h1>
  Welcome to next js learning
  <div className="absolute -z-10 inset-0 "> <Image
   src={HomeImg}
   alt="Home page image"
   
   style={{objectFit:"cover"}}
  /></div>
 
  </h1>
       

    </div>
 
  );
}
