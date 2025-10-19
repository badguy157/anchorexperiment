// components/Reviews.tsx
type ReviewsProps = {
  /** Show the big heading card at the top. Default: true */
  showTitle?: boolean;
};

export default function Reviews({ showTitle = true }: ReviewsProps) {
  return (
    <div className="container-wide">
      {showTitle && (
        <div className="card p-6 mb-6">
          <h3 className="text-2xl font-display font-semibold">Recent Reviews</h3>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        <article className="card p-6">
          <div className="text-brass">★★★★★</div>
          <p className="mt-3">
            Cozy room, lovely breakfast, and the river view was perfect.
          </p>
          <p className="mt-4 text-timber/80">— Sarah K.</p>
        </article>

        <article className="card p-6">
          <div className="text-brass">★★★★★</div>
          <p className="mt-3">
            Proper pub downstairs and friendly staff. Will be back!
          </p>
          <p className="mt-4 text-timber/80">— Tom P.</p>
        </article>

        <article className="card p-6">
          <div className="text-brass">★★★★★</div>
          <p className="mt-3">
            Great base for walking Hadrian’s Wall. Clean and comfortable.
          </p>
          <p className="mt-4 text-timber/80">— Elena R.</p>
        </article>
      </div>
    </div>
  );
}
