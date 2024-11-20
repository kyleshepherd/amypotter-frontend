import { goto } from "$app/navigation";

export const lerp = (a: number, b: number, alpha: number): number => {
  return a + alpha * (b - a);
};

export const handleAnchorClick = (event: any) => {
  event.preventDefault();
  const link = event.currentTarget;
  const linkUrl = new URL(link.href);
  if (linkUrl.pathname !== window.location.pathname) {
    goto(linkUrl);
    return;
  }
  const anchorId = linkUrl.hash.replace("#", "");
  const anchor = document.getElementById(anchorId);
  if (!anchor) {
    return;
  }
  window.scrollTo({
    top: anchor.offsetTop,
    behavior: "smooth",
  });
};
