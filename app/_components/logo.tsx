import { Arcade } from "@arcadeai/design-system";

export function Logo() {
  return (
    <>
      <div className="mr-2 hidden w-40 flex-row lg:flex lg:items-end lg:gap-2.5">
        <img
          alt="Arcade"
          className="h-7 w-auto grayscale dark:hidden"
          height={28}
          src="/images/logo/arcade-logo.png"
          width={118}
        />
        <img
          alt="Arcade"
          className="hidden h-7 w-auto dark:block"
          height={28}
          src="/images/logo/arcade-title-dark.png"
          width={118}
        />
      </div>

      <div className="mr-16 block w-6 lg:hidden">
        <Arcade className="h-7 w-auto" />
      </div>
    </>
  );
}
