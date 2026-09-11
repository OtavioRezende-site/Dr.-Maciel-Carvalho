/**
 * Helper to resolve media and asset URLs correctly regardless of whether
 * the app is deployed at root (/) or in a subpath like GitHub Pages (/Dr.-Maciel-Carvalho/)
 */
export function asset(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  
  // Replace missing temporary placeholder with the official portrait
  if (path.includes("file_0000000027f8720e9639722e95c699df")) {
    path = "dr_maciel_portrait.jpg";
  }

  const clean = path.startsWith("/") ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || "./";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${clean}`;
}
