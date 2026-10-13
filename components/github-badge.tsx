import IconGithub from "./icons/github";

export const GithubMenuBadge = () => (
  <a
    className="group flex h-8 shrink-0 flex-row items-center overflow-hidden rounded border border-primary/10 transition-opacity"
    href="https://github.com/ArcadeAI/arcade-ai"
    rel="nofollow noreferrer"
    target="_blank"
    title="GitHub Repository"
  >
    <div className="block bg-primary/10 px-1 py-1">
      <IconGithub className="h-6 w-6 opacity-100 group-hover:opacity-80" />
    </div>
  </a>
);
