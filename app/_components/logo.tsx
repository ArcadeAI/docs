import { Arcade, Badge } from "@arcadeai/design-system";
import Image from "next/image";

export function Logo() {
  return (
    <>
      <div className="mr-2 hidden w-40 flex-row lg:flex lg:items-end lg:gap-2.5">
        <Image
          alt="Arcade"
          className="h-7 w-auto dark:hidden"
          height={28}
          src="/images/logo/arcade-logo.png"
          width={160}
        />
        <Image
          alt="Arcade"
          className="hidden h-7 w-auto dark:block"
          height={28}
          src="/images/logo/arcade-title-dark.png"
          width={160}
        />
        <Badge
          className="relative top-0.5 font-medium font-mono text-xs"
          variant="outline"
        >
          Docs
        </Badge>
      </div>

      <div className="mr-16 block w-6 lg:hidden">
        <Arcade className="h-7 w-auto" />
      </div>
    </>
  );
}
