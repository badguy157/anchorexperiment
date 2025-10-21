// components/MenusHoursStrip.tsx
export default function MenusHoursStrip() {
    return (
      <section aria-label="Menus and opening hours" className="section-sm">
        <div className="container-wide">
          <div className="card p-4 md:p-5">
            <div className="grid gap-4 text-sm sm:grid-cols-3">
              <div>
                <div className="font-semibold">Judge &amp; Barrel Bar</div>
                <div className="text-timber/80">Mon–Thu 12–23 · Fri–Sat 12–24 · Sun 12–22</div>
                <a className="link" href="/eat-and-drink#bar">See bar menu</a>
              </div>
              <div>
                <div className="font-semibold">Salmon’s Leap Restaurant</div>
                <div className="text-timber/80">Lunch 12–15 · Dinner 17:30–21</div>
                <a className="link" href="/eat-and-drink#restaurant">See restaurant menu</a>
              </div>
              <div>
                <div className="font-semibold">Secret Garden Café</div>
                <div className="text-timber/80">Daily 08–15</div>
                <a className="link" href="/eat-and-drink#cafe">See café menu</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  