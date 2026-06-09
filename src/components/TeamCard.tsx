import { useState } from "react";


interface TeamMember {
    name: string;
    position: string;
    email: string;
    bio: string;
    image: string;
}

export default function TeamCard({ TeamMember: member }: { TeamMember: TeamMember }) {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="text-center flex flex-col items-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-40 h-40 rounded-full object-cover grayscale"
      />

      <h3 className="mt-6 text-[#D4AF37] text-xl font-serif uppercase">
        {member.name}
      </h3>

      <p className="text-white uppercase tracking-[4px] text-sm mt-2">
        {member.position}
      </p>

      {/* <p className="text-[#D4AF37] mt-2 text-sm">
        {member.email}
      </p> */}

      <button
        onClick={() => setShowBio(!showBio)}
        className="mt-4 text-[#D4AF37] uppercase border-b border-[#D4AF37] hover:opacity-80 transition"
      >
        {showBio ? "Hide Info" : "Read More"}
      </button>

      {showBio && (
        <div className="mt-4 text-white text-sm leading-relaxed max-w-sm">
          {member.bio}
        </div>
      )}
    </div>
  );
}