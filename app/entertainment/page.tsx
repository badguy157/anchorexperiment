// app/entertainment/page.tsx
import { events } from '@/lib/data';

export default function EntertainmentPage() {
  return (
    <main className="section-padding bg-offwhite">
      <div className="container-custom">
        <h1 className="font-heading text-4xl font-bold text-forest mb-8 text-center">What’s On</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div key={i} className="bg-cream rounded-lg p-6 border-2 border-brass shadow-md">
              <div className="text-4xl mb-2">🎤</div>
              <h2 className="font-heading text-2xl font-semibold text-forest mb-2">{event.title}</h2>
              <p className="text-brown">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
