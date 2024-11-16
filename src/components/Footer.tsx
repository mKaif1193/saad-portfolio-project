"use client";
import React, { useState } from "react";
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
import { buttonVariants } from "./ui/button";
import { SendIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const Footer = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("saad@gmail.com");
    setCopiedEmail(true);

    setTimeout(() => setCopiedEmail(false), 2000);
  };

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
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleCopyEmail}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-[36px] rounded-full rounded-r-none text-sm bg-black-200"
                  )}
                >
                  {copiedEmail ? (
                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 24 24"
                      y="0"
                      x="0"
                      height="18"
                      width="18"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="bg-inherit"
                    >
                      <g>
                        <path
                          data-original="#000000"
                          fill="currentColor"
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        />
                      </g>
                    </svg>
                  ) : (
                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 6.35 6.35"
                      y="0"
                      x="0"
                      height="20"
                      width="20"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="bg-inherit/50"
                    >
                      <g>
                        <path
                          fill="currentColor"
                          d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        />
                      </g>
                    </svg>
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent className="rounded-lg bg-black-200 text-white">
                {copiedEmail ? "Email Copied!" : "Copy My Email"}
              </TooltipContent>
            </Tooltip>

            <Link
              href={DATA.contact.social.Email.url}
              className="group relative inline-flex h-[40px] w-auto bg-gradient-to-r from-black-200 to-black-100 border-2 border-black-100 items-center justify-center rounded-l-none pl-2 sm:pl-6 pr-10 sm:pr-14 font-medium text-neutral-50"
            >
              <span className="z-10 pr-1 sm:pr-2 text-base sm:text-xl">
                {DATA.contact.social.Email.name}
              </span>
              <div className="absolute right-1 inline-flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-end rounded-full hover:rounded-l-none bg-black-200 transition-[width] group-hover:w-[calc(100%-6px)] sm:group-hover:w-[calc(100%-4px)]">
                <div className="mr-1.5 sm:mr-2.5 flex items-center justify-center">
                  <SendIcon className="size-4 sm:size-5" />
                </div>
              </div>
            </Link>
          </BlurFade>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-[50px] sm:mb-[80px]">
        <p className="text-sm md:text-base md:font-normal font-light text-center sm:mb-0 mb-4">
          Copyright &copy; 2024 - Saad <br /> saad.vercel.app
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
