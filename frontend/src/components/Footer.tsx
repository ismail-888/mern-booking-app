const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <span className="sm:text-3xl text-xl text-white font-bold tracking-tight">
          MernHolidays.com
        </span>
        <span className="text-white font-bold tracking-tight flex ">
          <p className="cursor-pointer">Privacy Policy </p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
