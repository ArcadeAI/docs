export function Logo() {
  return (
    <div className="mr-16 flex w-40 items-center">
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
  );
}
