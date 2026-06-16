import { Mail } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";

interface PartnerCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

export default function PartnerCard({
  image,
  name,
  role,
  bio,
}: PartnerCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
      <div className="h-[320px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">
          {name}
        </h3>

        <p className="mt-2 text-xs uppercase tracking-widest text-blue-600 font-semibold">
          {role}
        </p>

        <p className="mt-4 text-slate-600 text-sm leading-7">
          {bio}
        </p>

        <div className="flex gap-4 mt-6">
          <button className="w-9 h-9 border rounded-lg flex items-center justify-center hover:bg-slate-50">
            <LiaLinkedin size={16} />
          </button>

          <button className="w-9 h-9 border rounded-lg flex items-center justify-center hover:bg-slate-50">
            <Mail size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}