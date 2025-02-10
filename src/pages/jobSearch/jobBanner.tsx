const JobBanner = ({ src }) => {
  return (
    <div
      className="w-full h-[300px] col-span-12 md:col-span-6 xl:col-span-12 bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
};

export default JobBanner;

