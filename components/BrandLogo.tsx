// components/BrandLogo.tsx
// NOTE: We include BOTH 'text-forest' and 'text-offwhite' in literal strings
// so Tailwind never purges them in production builds.

type Variant = "dark" | "light";
type Mark = "classic-anchor" | "bridge-river" | "heritage-seal";

export default function BrandLogo({
  mark = "bridge-river",
  variant = "dark",
  size = 28,
  showWordmark = true,
}: {
  mark?: Mark;
  variant?: Variant;
  size?: number;
  showWordmark?: boolean;
}) {
  // Always keep both classes present in the file so Tailwind doesn't purge them.
  const baseColors = "text-forest text-offwhite";
  const finalColor = variant === "dark" ? "text-forest" : "text-offwhite";

  if (mark === "classic-anchor") {
    return <ClassicAnchor size={size} colorClass={`${baseColors} ${finalColor}`} showWordmark={showWordmark} />;
  }
  if (mark === "bridge-river") {
    return <BridgeRiver size={size} colorClass={`${baseColors} ${finalColor}`} showWordmark={showWordmark} />;
  }
  return <HeritageSeal size={size} colorClass={`${baseColors} ${finalColor}`} showWordmark={showWordmark} />;
}

/** 1) Classic Anchor Wordmark */
function ClassicAnchor({
  size,
  colorClass,
  showWordmark,
}: {
  size: number;
  colorClass: string;
  showWordmark: boolean;
}) {
  return (
    <div className={`flex items-center gap-2 ${colorClass}`} aria-label="The Anchor Hotel – Haydon Bridge•
">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="shrink-0"
        aria-hidden="true"
      >
        <path d="M12 2a2 2 0 110 4 2 2 0 010-4zm1 5v6h2a1 1 0 110 2h-2v4.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L11 19.586V15H9a1 1 0 110-2h2V7h2z" />
      </svg>

      {showWordmark && (
        <div className="leading-tight select-none">
          <div className="font-heading font-semibold text-base md:text-lg tracking-wide">
            The Anchor Hotel – Haydon Bridge
          </div>
        </div>
      )}
    </div>
  );
}

/** 2) Bridge & River (outline SVG uses currentColor) */
function BridgeRiver({
  size,
  colorClass,
  showWordmark,
}: {
  size: number;
  colorClass: string;
  showWordmark: boolean;
}) {
  return (
    <div className={`flex items-center gap-2 ${colorClass}`} aria-label="The Anchor Hotel – Haydon Bridge">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
        aria-hidden="true"
      >
        <path d="M3 12c4-5 14-5 18 0" />
        <circle cx="12" cy="5.5" r="1.6" />
        <path d="M12 7.5v7M9.5 11.5h5" />
        <path d="M7.5 14.5c.8 2.5 2.6 4 4.5 4s3.7-1.5 4.5-4" />
        <path d="M5 20c1 .8 2 .8 3 0s2-.8 3 0 2 .8 3 0 2-.8 3 0" />
      </svg>

      {showWordmark && (
        <div className="leading-tight select-none">
          <div className="font-heading font-semibold text-base md:text-lg tracking-wide">
            The Anchor Hotel – Haydon Bridge
          </div>
        </div>
      )}
    </div>
  );
}

/** 3) Heritage Seal (filled anchor; text uses currentColor) */
function HeritageSeal({
  size,
  colorClass,
  showWordmark,
}: {
  size: number;
  colorClass: string;
  showWordmark: boolean;
}) {
  const w = size + 6;
  const h = size + 6;
  return (
    <div className={`flex items-center gap-2 ${colorClass}`} aria-label="The Anchor Hotel – Haydon Bridge">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        viewBox="0 0 28 28"
        fill="none"
        className="shrink-0"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="12.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          fill="currentColor"
          d="M14 6.25a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zm1 4.75v5h2.25a.75.75 0 110 1.5H15v4.146l2.03-2.03a.75.75 0 111.06 1.06l-3.56 3.56a.75.75 0 01-1.06 0l-3.56-3.56a.75.75 0 111.06-1.06l2.03 2.03V17.5h-2.25a.75.75 0 110-1.5H13v-5h2z"
        />
        <text
          x="14"
          y="24.5"
          textAnchor="middle"
          fontSize="3.2"
          fill="currentColor"
          style={{ fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" }}
        >
          Since 1422
        </text>
      </svg>

      {showWordmark && (
        <div className="leading-tight select-none">
          <div className="font-heading font-semibold text-base md:text-lg tracking-wide">
            The Anchor Hotel – Haydon Bridge
          </div>
        </div>
      )}
    </div>
  );
}
