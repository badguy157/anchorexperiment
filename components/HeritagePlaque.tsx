// components/HeritagePlaque.tsx
export default function HeritagePlaque() {
    return (
      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white">
        {/* Place your image at /public/badges/heritage-plaque.png */}
        <img
          src="/badges/heritage-plaque.png"
          alt="Heritage-recognized business"
          className="h-5 w-5"
          loading="lazy"
          decoding="async"
        />
        <span className="text-sm">Heritage-recognized inn (Haydon Bridge)</span>
        <a href="/story" className="underline underline-offset-2">Learn more</a>
      </div>
    );
  }
  