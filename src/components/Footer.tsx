import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/Resume";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BlurFade from "./magicui/blur-fade";
import { Button } from "./ui/moving-border";
import { SendIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const Footer = () => {
  return (
    <footer id="contact" className="pb-10 mx-auto sm:mx-20">
      <div className="flex flex-col items-center">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-3">
              <Button
                borderRadius="14px"
                className="inline-flex flex-1 px-3 py-1 text-base sm:text-xl font-semibold text-black-100 bg-white pointer-events-none"
              >
                Contact Me
              </Button>
              <h2 className="text-2xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s work together today!
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white-200 md:mt-10 mt-5 text-center">
                Have a project in mind or just want to chat about how we can
                work together? Send me a message, and together we can build
                something amazing!
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="flex mt-20 items-center justify-center w-full">
          <BlurFade delay={BLUR_FADE_DELAY} className="flex items-center">
            <Button
              borderRadius="14px"
              className="px-3 py-1 text-black-100 bg-white/90"
            >
              <Link
                href={DATA.contact.social.Email.url}
                className="group relative inline-flex h-[40px] w-auto items-center justify-center pl-1 sm:pl-3 pr-6 sm:pr-10 font-medium"
              >
                <span className="z-10 pr-1 sm:pr-2 text-sm sm:text-xl">
                  {DATA.contact.social.Email.name}
                </span>
                <div className="absolute right-1 inline-flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-end rounded-full">
                  <div className="mr-1.5 sm:mr-2.5 flex items-center justify-center">
                    <SendIcon className="size-4 sm:size-5" />
                  </div>
                </div>
              </Link>
            </Button>
          </BlurFade>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-[50px] sm:mb-[80px]">
        <p className="text-sm md:text-base md:font-normal font-light text-center sm:mb-0 mb-4">
          Copyright &copy; 2024 - Saad <br /> saad-portfolio-project.vercel.app
        </p>

        <div className="flex flex-wrap items-center justify-center mx-10 md:gap-3 gap-6">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <Tooltip key={name}>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  target="_blank"
                  key={name}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-110 hover:bg-black-200/80 transition-all"
                >
                  <social.icon className={cn("size-4")} />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="rounded-lg bg-black-200 text-white">
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
