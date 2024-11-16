"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import BlurFadeText from "./magicui/blur-fade-text";
import { DATA } from "@/data/Resume";
import BlurFade from "./magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypingAnimation } from "./magicui/typing-animation";

const BLUR_FADE_DELAY = 0.04;

const Hero = () => {
  return (
    <div className="pb-20 pt-36 sm:pt-20 space-y-8">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="#0141ff"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full bg-black-100 dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <section
        id="hero"
        className="flex justify-center relative my-20 z-10 mx-auto"
      >
        <div className="w-full max-w-[90vw] md:max-w-3xl lg:max-w-[65vw] flex flex-col items-center justify-center gap-8">
          <div className="gap-8 sm:gap-2 flex sm:flex-row flex-col-reverse justify-between">
            <div className="flex flex-col flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name} 👋`}
              />

              <BlurFade delay={BLUR_FADE_DELAY}>
                <TypingAnimation
                  duration={20}
                  className="max-w-[600px] text-sm sm:text-lg md:text-xl"
                  text={DATA.description}
                />
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-20 sm:size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="max-w-[90vw] md:max-w-3xl lg:max-w-[65vw] mx-auto py-10 px-6"
      >
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="sm:text-2xl text-lg font-bold">About Me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="prose max-w-full text-pretty font-sans text-sm sm:text-base text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </p>
        </BlurFade>
      </section>
    </div>
  );
};

export default Hero;
