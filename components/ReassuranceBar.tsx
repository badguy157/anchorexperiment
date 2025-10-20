// components/ReassuranceBar.tsx
export default function ReassuranceBar() {
    return (
      <div className="mt-4 rounded-xl border border-stone/60 bg-white/70 px-4 py-3 text-sm text-timber/90 shadow-sm">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li className="flex items-center gap-2">
            <span aria-hidden>💷</span>
            <span>Best rate here</span>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden>🥞</span>
            <span>Breakfast included</span>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden>🔒</span>
            <span>Secure booking</span>
          </li>
        </ul>
      </div>
    );
  }
  