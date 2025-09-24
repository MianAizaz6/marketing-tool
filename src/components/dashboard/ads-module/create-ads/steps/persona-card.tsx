import { Pencil, UserCircle2 } from 'lucide-react';

export type Persona = {
  personaId: string;
  name: string;
  description: string;
  ageRange: number[];
  gender: string;
  location: string;
  interests: string[];
  reasoning: string;
  selected: boolean;
};

type PersonaCardProps = {
  persona: Persona;
  toggleSelectPersona: (personaId: string) => void;
  openEditModal: (persona: Persona) => void;
};

export function PersonaCard({ persona, toggleSelectPersona, openEditModal }: PersonaCardProps) {
  return (
    <div
      className={`rounded-2xl flex flex-col justify-between  duration-200 ease-in-out border-2 p-4 shadow-sm cursor-pointer transition-all transform
    ${
      persona.selected
        ? 'border-[#FF4400] bg-[#FFF4F0] shadow-md'
        : 'border-gray-200 bg-white hover:border-[#FF4400] hover:shadow-md hover:scale-[1.02]'
    }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 ">
          <UserCircle2 className="w-6 h-6 text-[#FF4400]" />
          <h3 className="text-lg font-semibold">{persona.name}</h3>
        </div>
        <Pencil onClick={() => openEditModal(persona)} className="w-6 h-6 text-[#FF4400]" />
      </div>

      {/* Content */}
      <div className="space-y-1 text-sm text-gray-700">
        <p>{persona.description}</p>
        <p>
          <span className="font-medium">Age: </span>
          {persona.ageRange[0]}–{persona.ageRange[1]}
        </p>
        <p>
          <span className="font-medium">Location: </span>
          {persona.location}
        </p>
        <p>
          <span className="font-medium">Interests: </span>
          {persona.interests.join(', ')}
        </p>
        <p className="italic text-gray-500">{persona.reasoning}</p>
      </div>
      {/* Footer */}
      <button
        onClick={e => {
          e.stopPropagation();
          toggleSelectPersona(persona.personaId);
        }}
        className={`mt-3 cursor-pointer w-full rounded-lg px-3 py-2 text-sm font-medium transition ${
          persona.selected
            ? 'bg-[#FF4400] text-white hover:bg-[#E63D00'
            : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        {persona.selected ? 'Selected' : 'Select'}
      </button>
    </div>
  );
}
