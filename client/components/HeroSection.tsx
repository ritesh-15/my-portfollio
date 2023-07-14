export default function HeroSection() {
  return (
    <section className="text-white flex items-center min-h-screen relative">
      <div className="z-20">
        <h1 className="text-5xl tracking-[0.05em] font-light">My name is</h1>
        <h2 className="text-8xl font-bold tracking-[0.15em] leading-snug">
          Ritesh
        </h2>
        <p className="text-2xl font-light md:w-[65%] leading-relaxed">
          Learner, programmer, and a full stack developer who can build scalable
          full stack applications
        </p>
      </div>

      <div className="absolute -z-10 bottom-12 w-[155px] h-[155px] bg-primary rounded-full"></div>
      <div className="absolute -z-10 top-24 right-0 w-[155px] h-[155px] bg-primary rounded-full"></div>

      <div className="absolute -z-10 top-40 right-1/2 w-[55px] h-[55px] bg-primary rounded-full"></div>
      <div className="absolute -z-10 top-48 right-1/4 w-[55px] h-[55px] bg-primary rounded-full"></div>
      <div className="absolute -z-10 top-72 right-1/3 w-[55px] h-[55px] bg-primary rounded-full"></div>
    </section>
  )
}
