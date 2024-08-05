import Image from "next/image";
import Link from 'next/link';
import homeImg from 'public/home.jpg';


export default function Home() {
  return (
    <div>
      Home page
      <div className="absolute -z-10 inset-0">
        <Image
          src={homeImg}
          alt="two factory mates and a car"
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
    </div>
    
  );
}
