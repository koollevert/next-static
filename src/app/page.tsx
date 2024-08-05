import Image from "next/image";

import home from '/next.svg';


export default function Home() {
  return (
    <div>
      Home page
      <div className="absolute -z-10 inset-0">
        <Image
          src={'/home.jpg'}
          alt="two factory mates and a car"
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
    </div>
    
  );
}
