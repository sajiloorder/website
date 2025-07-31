export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen ">
      <div className="px-6 sm:px-4 lg:px-10  max-w-screen-2xl mx-auto w-full">{children}</div>
    </div>
  );
}
