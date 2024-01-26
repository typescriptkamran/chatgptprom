import Nav from "@/components/Nav"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return   (
  <div className=" w-full h-screen flex ">
  <section>
  <Nav / >
<div className="w-full h-screen">
  {children}
  </div>

  </section>
  </div>
  )
}