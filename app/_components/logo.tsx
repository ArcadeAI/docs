import { Arcade } from "@arcadeai/design-system";
import ArcadeLogo from "@arcadeai/design-system/assets/images/arcade-logo";

export function Logo() {
  return (
    <>
      <div className="mr-2 hidden w-40 flex-row lg:flex lg:items-end lg:gap-2.5">
        <ArcadeLogo className="h-7 w-auto invert dark:invert-0" />
        {/* <Badge
          className="relative top-0.5 font-medium font-mono text-xs"
          variant="outline"
        >
          Docs
        </Badge> */}
      </div>

      <div className="mr-16 block w-6 lg:hidden">
        <Arcade className="h-7 w-auto" />
      </div>
    </>
  );
}
