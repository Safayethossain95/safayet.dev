/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

function Hero() {
  return (
    <div
      className="animate-fadeInIt  relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
      style={{ maxWidth: "1200px" }}
    >
      <p className="text-xl mb-5 font-c">Hey, I&apos;m Safayet.</p>
      <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
        I like <span className="heroShiny1 text-fun-pink">developing</span> and{" "}
        styling <span className="heroShiny2 text-fun-pink">engaging</span> web
        interfaces.
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

      <a
        download="Safayet_Hossain_resume.pdf"
        href="/resume/Safayet_Hossain_resume.pdf"
        className="cursor-pointer duration-300  whitespace-nowrap px-6 py-2 text-fun-white border-2 text-md rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors font-normal font-c flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v4.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.75v-4.5M12 3v12m0 0l-4-4m4 4l4-4"
          />
        </svg>{" "}
        Download CV
      </a>
    </div>
  );
}

export default Hero;
