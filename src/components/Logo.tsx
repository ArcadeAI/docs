export function Logo() {
  return (
    <div className="flex items-center w-40 mr-4">
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
