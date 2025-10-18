import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Anchor Bridge',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-offwhite section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="font-heading text-4xl font-bold text-forest mb-8">Privacy Policy</h1>
        <div className="prose prose-brown max-w-none bg-cream rounded-lg p-8 border border-brass">
          <p className="text-brown">
            This privacy policy will be updated with full details about how The Anchor Bridge collects, uses, and protects your personal information.
          </p>
        </div>
      </div>
    </div>
  );
}
