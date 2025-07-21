export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen ">
      <div className="px-2 sm:px-6 lg:px-10 xl:px-16 max-w-screen-2xl mx-auto w-full">{children}</div>
    </div>
  );
}
