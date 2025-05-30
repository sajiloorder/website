import Nav from "@/components/nav/Nav";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* navbar */}
      <Nav />
      <div id="app">{children}</div>
      {/* footer */}
    </>
  );
}
