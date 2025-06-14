import Link from "next/link";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { NextImage } from "@/components/ui/next-image";

import { siteConfig } from "@/config";

export const Welcome = () => {
  return (
    <SectionWrapper className="mt-2 h-dvh p-0 md:p-0">
      <NextImage
        src={siteConfig.assets.images.welcome}
        alt="Dana & Hana"
        className="2xl:object-[100%_30%]"
      />
      <div className="absolute grid h-full w-full grid-cols-1 grid-rows-6 place-items-center bg-black/10">
        <div className="row-start-5 flex h-full w-full flex-col items-center text-white">
          <Heading
            title="Dana & Hana"
            description="We are getting married!"
            className="font-allura text-5xl md:text-7xl 2xl:text-shadow-2xs"
            descriptionClassName="font-sans text-center mt-0 md:mt-2"
          />
          <Link href="#main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-2 animate-bounce md:mt-10"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};
