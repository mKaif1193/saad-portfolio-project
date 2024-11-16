import React from "react";
import { Button } from "./ui/moving-border";
import { DATA } from "@/data/Resume";
import BlurFade from "./magicui/blur-fade";
import { CardSpotlight } from "./ui/card-spotlight";

const BLUR_FADE_DELAY = 0.04;

const Work = () => {
  return (
    <section id="work" className="mx-auto sm:mx-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Button
                borderRadius="14px"
                className="inline-flex flex-1 px-3 py-1 text-base sm:text-xl font-semibold text-black-100 bg-white pointer-events-none"
              >
                Work
              </Button>
              <h2 className="text-2xl font-bold tracking-tight sm:text-5xl">
                My Work Experience
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked with many companies. Here are the list.
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 max-w-[850px] mx-auto">
          {DATA.work.map((card, id) => (
            <BlurFade
              key={card.company}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <CardSpotlight
                key={card.company}
                className="flex-1 text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-start text-xl md:text-2xl font-bold relative z-20">
                    {card.company}
                  </h2>

                  <p className="text-end text-white-100 relative z-20 text-xs">
                    {card.start} - {card.end}
                  </p>
                </div>

                <div className="lg:ms-5">
                  <h4 className="text-start text-lg md:text-xl font-bold relative z-20 mt-2">
                    {card.title}
                  </h4>

                  <p className="text-start text-white-100 mt-3 font-semibold relative z-20 sm:text-sm text-xs">
                    {card.description}
                  </p>
                </div>
              </CardSpotlight>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
