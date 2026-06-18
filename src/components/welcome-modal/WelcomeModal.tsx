import { X, Bell } from "lucide-react";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({
  isOpen,
  onClose,
}: WelcomeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      
      <div className="relative w-full max-w-lg overflow-hidden rounded-[28px] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">

        {/* Background Image */}
        <img
          src="/images/pizza123.jpg"
          alt="Food"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-100"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white transition hover:bg-white/20"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-5 sm:px-8 py-10 sm:py-14 text-center">

          {/* Badge */}
          <div className="mb-5 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 backdrop-blur-md">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              🚀 Coming Soon
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            Sajilo
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Order
            </span>
          </h1>

          {/* Divider */}
          <div className="my-5 sm:my-6 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-orange-400 to-red-500" />

          {/* Tagline */}
          <p className="max-w-sm text-sm sm:text-base md:text-lg font-medium text-gray-200">
            Delicious food from your favorite restaurants delivered right to
            your doorstep.
          </p>

          {/* Email Box */}
          <div className="mt-8 w-full max-w-sm rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">

  <div className="flex items-center gap-2">

    {/* Input */}
    <input
      type="email"
      placeholder="Enter email"
      className="flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none focus:border-orange-500"
    />

    {/* Mobile: Icon Button | Desktop: Full Button */}
    <button className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transition hover:scale-105">
      <Bell size={18} />
    </button>

  </div>

  <p className="mt-3 text-[11px] sm:text-xs text-gray-300">
    Get notified when we launch.
  </p>
</div>

          {/* Footer */}
          <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Launching Soon Across Nepal
          </div>

        </div>
      </div>
    </div>
  );
}