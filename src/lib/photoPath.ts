/** Encode file names with spaces for /public/images paths */
export function photoPath(folder: string, filename: string) {
  return `${folder}/${encodeURIComponent(filename)}`;
}
