import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full mt-[30px]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Description */}
          <div className="text-center xl:text-left">
            <div className="text-xl mb-[15px]">
              <span className="text-xl">Software </span>
              <span className="text-accent text-xl">Developer</span>
            </div>
            <h1 className="h1">
              Hi! I'm
              <br />
              <span>Daniyal Ahmed</span>
            </h1>
            <p className="max-w-[500px] text-white/80 mb-[30px]">
              I'm a software developer based in Karachi, Pakistan. I specialize
              in building and designing exceptional digital experiences.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button className="flex justify-center items-center bg-accent border-[1px] border-accent hover:bg-primary hover:text-accent transition-all rounded-[5px] text-primary">
                <FiDownload className="mr-2" />
                <span>Resume</span>
              </Button>
              <Socials containerStyles='flex gap-6' iconStyles='w-9 h-9 text-accent flex justify-center items-center border border-accent rounded-full hover:bg-accent hover:text-primary transition-all' />
            </div>
          </div>
          {/* Photo */}
          <Photo/>
        </div>
      </div>
    </section>
  );
};

export default Home;
