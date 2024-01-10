import Feed from "@/components/Feed"

const home = () => {
  return (
    <section className="w-full text-center flexcol items-center justify-center">
      <h1 className="head_text text-center">
        Discover and share
        <br className="max-md:hidden"/>
        <span className="orange_gradient">
        AI Poweered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Pomptopia is place you share power prompts for AI prompts.
      </p>
      <Feed />

    </section>
  )
}

export default home