import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative isolate mt-32 px-6 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[24.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ec135f] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[48.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 text-center lg:px-12 lg:pb-16">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Welcome to Arcade AI!
          </h1>
          <p className="mt-8 text-pretty text-sm font-medium text-zinc-300 sm:px-36 sm:text-base">
            What if AI could do more than suggest? Imagine instead of getting a
            to-do list, your AI could{" "}
            <span className="font-bold text-white">take action</span> - sending
            urgent emails, updating customer records, or kicking off complex
            workflows.
          </p>

          <div className="mt-16 flex items-center justify-center gap-x-6">
            <a
              href="/home/quickstart"
              className={cn(buttonVariants({ variant: "default" }), "h-12")}
            >
              <Rocket className="mr-2" />
              Get Started
            </a>
            <a
              href="#"
              className={cn(buttonVariants({ variant: "outline" }), "h-12")}
            >
              Build a tool
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[24.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ec135f] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[48.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </section>
  );
}
