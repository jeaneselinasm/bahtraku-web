/**
 * Shows a photo when `src` is given; otherwise a labelled placeholder.
 * Put images in /public/images and pass e.g. src="/images/hero.jpg".
 */
export function Photo({ src, label, className = "" }: { src?: string; label: string; className?: string }) {
  return (
    <div className={`photo ${className}`}>
      {src ? <img src={src} alt={label} /> : <span>[Photo: {label}]</span>}
    </div>
  );
}
