export default function WhatToExpect() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-heading">
        What to Expect
      </h3>

      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
            <span className="text-accent font-bold">1</span>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-1">
              We'll Contact You
            </h4>
            <p className="text-neutral-600 text-sm">
              Within 24 hours, we'll reach out to schedule a convenient time to chat about your project.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
            <span className="text-accent font-bold">2</span>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-1">
              Free Consultation
            </h4>
            <p className="text-neutral-600 text-sm">
              We'll discuss your needs, answer questions, and provide a personalized quote—absolutely free.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
            <span className="text-accent font-bold">3</span>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-1">
              No Obligation
            </h4>
            <p className="text-neutral-600 text-sm">
              There's no pressure to proceed. Take your time to decide if our services are right for you.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-neutral-200">
        <p className="text-sm text-neutral-600 italic">
          Your precious memories deserve expert care. Let's talk about how we can help preserve them for generations to come.
        </p>
      </div>
    </div>
  );
}
