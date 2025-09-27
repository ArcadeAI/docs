export function Logo() {
  return (
    <>
      <div className="mr-2 hidden w-40 items-center md:block">
        <img
          alt="Arcade Logo"
          className="h-8 w-auto dark:hidden"
          height={32}
          loading="lazy"
          src={"/images/logo/arcade-logo.png"}
          width={120}
        />
        <img
          alt="Arcade Logo"
          className="hidden h-8 w-auto dark:block"
          height={32}
          loading="lazy"
          src={"/images/logo/arcade-title-dark.png"}
          width={120}
        />
      </div>
      <div className="mr-16 block w-6 md:hidden">
        <img
          alt="Arcade Logo"
          className="dark:block"
          height={30}
          loading="lazy"
          src={"/images/logo/arcade.png"}
          width={30}
        />
      </div>
    </>
  );
}
