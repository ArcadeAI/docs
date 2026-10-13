import Link from "next/link";
import { SignupLink } from "@/components/analytics";
import { getDashboardUrl } from "@/components/dashboard-link";
import { NavBarButton } from "@/components/nav-bar-button";

/** "Sign Up" / "Dashboard" buttons at the end of the top navbar. */
export function NavLinks() {
  return (
    <>
      <SignupLink linkLocation="docs:navbar" utmMedium="navbar">
        <NavBarButton
          hideOnPath={["/build/create-tools/add-tools-to-arcade-catalog"]}
          text="Sign Up"
        />
      </SignupLink>
      <Link href={getDashboardUrl("playground/chat")}>
        <NavBarButton text="Dashboard" variant="outline" />
      </Link>
    </>
  );
}
