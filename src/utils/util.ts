export const lerp = (a: number, b: number, alpha: number): number => {
  return a + alpha * (b - a);
};

export const handleAnchorClick = (event: any) => {
  event.preventDefault();
  const link = event.currentTarget;
  const anchorId = new URL(link.href).hash.replace("#", "");
  const anchor = document.getElementById(anchorId);
  if (!anchor) {
    return;
  }
  window.scrollTo({
    top: anchor.offsetTop,
    behavior: "smooth",
  });
};
