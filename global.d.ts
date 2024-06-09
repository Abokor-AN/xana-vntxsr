interface Versions {
  node: () => string;
  chrome: () => string;
  electron: () => string;
}

interface Window {
  versions: Versions;
}
