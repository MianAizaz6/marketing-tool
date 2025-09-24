import { useState } from 'react';
import { perosnaOptions } from '../../../../../static-data';
import { Persona, PersonaCard } from './persona-card';
import PersonaEditModal from './persona-edit-modal';

const AudiencePersonaStep = () => {
  const [personas, setPersonas] = useState(perosnaOptions);
  const [selectedPersonas, setSelectedPersonas] = useState<Persona[]>([]);
  const [toggleEditModal, setToggleEditModal] = useState<boolean>(false);
  const [personaToEdit, setPersonaToEdit] = useState<Persona>();

  const toggleSelectPersona = (personaId: string) => {
    const updatedPersonas = personas.map(p =>
      p.personaId === personaId ? { ...p, selected: !p.selected } : p
    );

    setPersonas(updatedPersonas);
    const selected = updatedPersonas.filter(p => p.selected === true);
    setSelectedPersonas(selected);
  };

  console.log('Selected Personas:', selectedPersonas);

  const openEditModal = (persona: Persona) => {
    setPersonaToEdit(persona);
    setToggleEditModal(true);
  };

  const saveEditedPersona = (updated: Persona) => {
    setPersonas(prev => {
      const next = prev.map(p => (p.personaId === updated.personaId ? { ...p, ...updated } : p));
      setSelectedPersonas(next.filter(p => p.selected));
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          We’ve generated personas based on your input. Select, edit, or regenerate them to match
          your audience.
        </h2>
        <button
          onClick={() => {
            // TODO: hook regenerate function
          }}
          className="rounded-lg bg-[#FF4400] cursor-pointer px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#e03c00]"
        >
          Regenerate Personas
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {personas.map(p => (
          <PersonaCard
            openEditModal={openEditModal}
            key={p.personaId}
            persona={p}
            toggleSelectPersona={toggleSelectPersona}
          />
        ))}
      </div>
      {toggleEditModal && personaToEdit && (
        <PersonaEditModal
          persona={personaToEdit}
          onClose={() => setToggleEditModal(false)}
          onSave={() => saveEditedPersona(personaToEdit)}
        />
      )}
    </div>
  );
};

export default AudiencePersonaStep;
