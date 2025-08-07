import { Button } from "@/components/Button";

/**
 * Hero component displays the main hero section with a background image and call-to-action button.
 */
export const Hero = () => {
  return (
    <section className="relative h-[50vh] w-full overflow-hidden sm:h-[40vh]">
      <div className="absolute inset-0">
        <img
          src="/images/arcade-hero-1.png"
          alt="Arcade Hero"
          className="h-full w-full rounded-xl object-cover blur-xs filter"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <img
          src="/images/logo/arcade-title-dark.png"
          alt="Arcade Logo"
          className="mb-1 w-3/4 sm:w-1/2"
        />
        <p className="mb-4 text-lg text-white sm:mb-8 sm:text-xl">
          Empower Agents to Act for your Users
        </p>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button href="/home">Learn more</Button>
          <Button href="/home/quickstart">Get started</Button>
        </div>
      </div>
    </section>
  );
};
