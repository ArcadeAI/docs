import { Button } from "@/components/Button";

/**
 * Hero component displays the main hero section with a background image and call-to-action button.
 */
export const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] sm:h-[40vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/arcade-hero-1.png"
          alt="Arcade AI Hero"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img
          src="/images/logo/arcadeai-title-dark.png"
          alt="Arcade AI Logo"
          className="mb-1 w-3/4 sm:w-1/2"
        />
        <p className="text-lg sm:text-xl mb-4 sm:mb-8 text-white">
          Empower Agents to Act for your Users
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Button href="/home">Learn more</Button>
          <Button href="/guides/quickstart">Get started</Button>
        </div>
      </div>
    </section>
  );
};
