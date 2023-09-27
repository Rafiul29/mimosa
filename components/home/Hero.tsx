import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
const plafairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] ">
      <div className="w-full h-full  grid grid-rows-8 gap-5">
        {/* FIRST ROW */}
        <div className="w-full h-[8rem]  grid grid-cols-[30%_auto] gap-20">
          <div className="w-full h-full  overflow-hidden">
            <div className="w-full h-full overflow-hidden border rounded-[0px_50px_0px_50px]">
              <Image
                src="https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg"
                alt="Low Angle Shot of Woman in Gray and White Sweater"
                width={640}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 uppercase font-bold ">Awaken your</h2>
          </div>
        </div>

        <hr className="border-gray" />

        {/* SECOND ROW */}
        <div className="w-full h-[8rem]  grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            <h2
              className={cn(plafairDisplay.className, "headline-1 lowercase")}
            >
              inner
            </h2>
          </div>

          <div className="w-full h-full overflow-hidden border rounded-[50px_0px_50px_50px]">
            <Image
              src="https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg"
              alt="Low Angle Shot of Woman in Gray and White Sweater"
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex h-full w-full items-center">
            <h2 className="headline-1 font-bold uppercase">
              Goddess<span className="text-green">.</span>
            </h2>
          </div>
        </div>

        <hr className="border-gray" />

        {/* THird ROW */}
        <div className="w-full h-[8rem]  grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 uppercase font-semibold">Unveling</h2>
          </div>
          <div className="w-full h-full overflow-hidden border rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg"
              alt="Low Angle Shot of Woman in Gray and White Sweater"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <hr className="border-gray" />

        {/* FOURTH ROW */}
        <div className="w-full h-[8rem] grid grid-cols-[35%_auto] gap-20">
          <div className="w-full h-full overflow-hidden border rounded-[50px_50px_50px_0px]">
            <Image
              src="https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg"
              alt="Low Angle Shot of Woman in Gray and White Sweater"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex h-full w-full items-center">
            <h2 className="headline-1 font-bold uppercase">
              <span
                className={cn(
                  plafairDisplay.className,
                  "font-normal lowercase"
                )}
              >
                With
              </span>{" "}
              M
              <span
                className={cn(
                  plafairDisplay.className,
                  "font-normal lowercase text-pink"
                )}
              >
                i
              </span>
              mosa
              <span className="text-orange">.</span>
            </h2>
          </div>
        </div>
        {/* PACKAGES */}
        <Link
          href="/#packages"
          className="bg-dark/80 backdrop-blur-lg text-light w-40 h-40 rounded-full overflow-hidden flex justify-center items-center uppercase text-lg absolute left-[37.5%] bottom-[16%] z-[1] group shadow-2xl shadow-dark/60 hover:shadow-violet/60 eq "
        >
          <p className="z-[3]">Packages</p>
          {/* FILLER 1*/}
          <span className="z-[2] absolute top-full left-0 right-0 bottom-0 w-full h-1/2  bg-violet/80  group-hover:top-1/2 eq "></span>

          {/* FILLER 2*/}
          <span className="z-[2] absolute -top-full left-0 right-0 bottom-0 w-full h-1/2  bg-violet/80  group-hover:top-0 eq "></span>
        </Link>
      </div>
    </section> 
  );
};

export default Hero;
