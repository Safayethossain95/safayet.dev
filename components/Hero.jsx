/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div
      className="animate-fadeInIt  relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
      style={{ maxWidth: "1200px" }}
    >
      <p className="text-xl mb-5">Hey, I&apos;m Safayet.</p>
      <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
        I like <span className="heroShiny1 text-fun-pink">developing</span> and{" "} styling{" "}
        <span className="heroShiny2 text-fun-pink">engaging</span>  web interfaces.
        
        {/* Images with animation delays */}
        <Image
          className="sqD animate-upAndDown squiggle-hero-html w-16 top-[-40px] right-[5%] absolute" // Added absolute positioning
          style={{ animationDelay: "0.1s" }}
          src="/static/doodles/hero/html.svg" // Correct path
          width={64} 
          height={64}
        />
        <Image
          className="sqD animate-upAndDown squiggle-hero-nextjs hidden absolute top-[75px] right-0 w-11"
          style={{ animationDelay: "0.2s" }}
          src="/static/doodles/hero/nextjs.svg" // Correct path
          width={64}
          height={64}
        />
        
       
        <Image
          className="sqD animate-upAndDown hidden sm:block absolute left-[100px] lg:left-[660px] bottom-[-150px] "
          style={{ animationDelay: "0.5s" }}
          src="/static/doodles/hero/js.svg" // Correct path
          width={100}
          height={100}
        />
        <Image
          className="sqD animate-upAndDown absolute bottom-[-170px] left-[21%] sm:right-[45%]"
          style={{ animationDelay: "0.6s" }}
          src="/static/doodles/hero/dino.svg" // Correct path
          width={100}
          height={100}
        />
        <Image
          className="sqD animate-upAndDown absolute left-[412px] sm:right-0 bottom-[-252px] lg:[5%]"
          style={{ animationDelay: "0.7s" }}
          src="/static/doodles/hero/paintbrush.svg" // Correct path
          width={200}
          height={100}
        />
        {/* <Image
          className="sqD animate-upAndDown squiggle-hero-pop1 hidden sm:block absolute sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
          src="/static/doodles/hero/pop1.svg" // Correct path
          width={100}
          height={100}
        /> */}
        <Image
          className="sqD animate-upAndDown absolute left-[405px] bottom-[85px] sm:bottom-[-100px] sm:left-5 opacity-40"
          style={{ animationDelay: "0.9s" }}
          src="/static/doodles/hero/code.svg" // Correct path
          width={100}
          height={100}
        />
      </h1>
      <Link href="/learnmore">
        <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
          Tell me more
        </div>
      </Link>
    </div>
  );
}

export default Hero;
