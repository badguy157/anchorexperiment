import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Anchor Bridge',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-offwhite section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="font-heading text-4xl font-bold text-forest mb-8">Terms & Conditions</h1>
        <div className="prose prose-brown max-w-none bg-cream rounded-lg p-8 border border-brass">
          <p className="text-brown">
            This page will be updated with full terms and conditions for using The Anchor Bridge website and services.
          </p>
        </div>
      </div>
    </div>
  );
}
