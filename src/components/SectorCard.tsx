interface Props {
  title: string;
  image: string;
  excerpt: string;
  icon: any;
}

const SectorCard = ({
  title,
  image,
  excerpt,
  icon: Icon,
}: Props) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="bg-blue-600 w-8 h-8 rounded-md flex items-center justify-center">
            <Icon size={16} className="text-white" />
          </div>

          <h3 className="text-white font-semibold">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <span className="text-[#07103A] text-xs font-bold uppercase tracking-wider">
          Sector Focus
        </span>

        <p className="mt-4 text-slate-600 text-sm leading-7">
          {excerpt}
        </p>

        {/* <button className="mt-6 flex items-center gap-2 text-blue-600 font-medium text-sm">
          Explore Sector
          <ArrowRight size={16} />
        </button> */}
      </div>
    </div>
  );
};

export default SectorCard;