// components/HeritagePlaque.tsx
import Button from "@/components/Button";

export default function HeritagePlaque() {
  return (
    <div className="mt-3 inline-flex flex-wrap items-center gap-3 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white">
      {/* Uses your current asset name/path */}
      <img
        src="/badges/history-plaque.png"
        alt="Heritage-recognized business"
        className="h-5 w-5"
        loading="lazy"
        decoding="async"
      />

      <span className="text-sm">Heritage-recognized inn (Haydon Bridge)</span>

      {/* CTA-styled like the rest of the site */}
      <Button href="/story" variant="light" size="sm">
        Learn more
      </Button>
    </div>
  );
}
