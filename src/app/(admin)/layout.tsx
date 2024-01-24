import Nav from "@/components/Nav"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return   (
  <div className=" w-full h-screen flex flex-col">
  <section>
  <Nav />
  {children}
  </section>
  </div>
  )
}