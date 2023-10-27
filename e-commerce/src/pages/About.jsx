const currentDate = new Date();

// Get the current year using getFullYear() method
const currentYear = currentDate.getFullYear();

const About = () => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
      <h1 className="text-4xl font-bold leading-none tracking-tight">
        We love
      </h1>
      <div className="stats bg-primary shadow">
        <div className="stat">
          <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
            Comfy
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to comfy store, your premier destination for high-quality and
        stylish furniture. At comfy, we are dedicated to helping you create the
        home of your dreams, where comfort, functionality, and aesthetics
        converge. Our Story Founded in 2007, comfy has been serving homeowners
        and interior design enthusiasts for {currentYear - 2007} years. Our
        journey began with a simple yet profound vision: to provide an extensive
        selection of furniture that elevates the beauty and functionality of
        your living spaces. Over the years, we have grown into a trusted source
        for a wide range of furniture, from classic to contemporary, to suit
        various tastes and preferences. What Sets Us Apart
      </p>
    </div>
  );
};
export default About;
