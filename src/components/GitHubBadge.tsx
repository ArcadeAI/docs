import IconGithub from "./icons/github";

export const GithubMenuBadge = () => (
  <a
    href="https://github.com/ArcadeAI/arcade-ai"
    className="border-primary/10 group flex h-8 shrink-0 flex-row items-center overflow-hidden rounded border transition-opacity"
    target="_blank"
    rel="nofollow noreferrer"
    title="GitHub Repository"
  >
    <div className="bg-primary/10 block px-1 py-1">
      <IconGithub className="h-6 w-6 opacity-100 group-hover:opacity-80" />
    </div>
  </a>
);
