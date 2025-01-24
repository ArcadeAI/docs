export function Logo() {
  return (
    <>
      <div className="mr-16 hidden w-40 items-center md:block">
        <img
          className="dark:hidden"
          loading="lazy"
          src={"/images/logo/arcade-ai-logo.png"}
          alt="Arcade AI Logo"
          width={150}
          height={30}
        />
        <img
          className="hidden dark:block"
          loading="lazy"
          src={"/images/logo/arcadeai-title-dark.png"}
          alt="Arcade AI Logo"
          width={150}
          height={30}
        />
      </div>
      <div className="mr-16 block w-6 md:hidden">
        <img
          className="dark:block"
          loading="lazy"
          src={"/images/logo/arcadeai.png"}
          alt="Arcade AI Logo"
          width={30}
          height={30}
        />
      </div>
    </>
  );
}
