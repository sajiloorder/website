import { X, ArrowRight } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-[32px] shadow-2xl">
        {/* Background Food Image */}
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&q=80"
          alt="Food"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/95" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute  cursor-pointer right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="relative z-10 flex min-h-[540px] flex-col items-center justify-center px-8 text-center">
          <span className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-orange-300">
            Coming Soon
          </span>

          {/* Logo Text */}
          <h1 className="leading-none">
            <span className="block text-6xl font-black tracking-tight text-white drop-shadow-xl">
              SAJILO
            </span>

            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-6xl font-black tracking-tight text-transparent drop-shadow-xl">
              ORDER
            </span>
          </h1>

          <div className="my-5 h-1 w-20 rounded-full bg-orange-500" />

          <p className="mb-8 text-base font-medium text-gray-200">
            Taste Delivered.
          </p>

          {/* Smaller Email Section */}
          <div className="flex w-full max-w-xs gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-md outline-none focus:border-orange-500"
            />

            <button className="flex items-center justify-center rounded-lg cursor-pointer bg-orange-500 px-3 text-black transition hover:bg-orange-400">
              <ArrowRight size={18} />
            </button>
          </div>

          <p className="mt-3 text-xs text-gray-400">
            Get notified when we launch.
          </p>
        </div>
      </div>
    </div>
  );
}