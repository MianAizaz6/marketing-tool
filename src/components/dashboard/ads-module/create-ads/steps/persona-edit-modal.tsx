import React, { useState } from 'react';
import { X } from 'lucide-react';

type Persona = {
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

interface PersonaEditModalProps {
  persona: Persona;
  onClose: () => void;
  onSave: (updated: Persona) => void;
}

const PersonaEditModal: React.FC<PersonaEditModalProps> = ({ persona, onClose, onSave }) => {
  const [ageRange, setAgeRange] = useState(persona.ageRange || [18, 35]);
  const [gender, setGender] = useState(persona.gender || 'Any');
  const [location, setLocation] = useState(persona.location || '');
  const [modalInterests, setModalInterests] = useState(persona.interests || []);
  const [interestInput, setInterestInput] = useState('');

  const handleAddInterest = () => {
    if (interestInput.trim() && !modalInterests.includes(interestInput.trim())) {
      setModalInterests([...modalInterests, interestInput.trim()]);
      setInterestInput('');
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setModalInterests(modalInterests.filter(i => i !== interest));
  };

  console.log('Interests:', modalInterests);

  const handleSave = () => {
    onSave({
      ...persona,
      ageRange: [...ageRange], // force new array
      gender,
      location,
      interests: [...modalInterests], // force new array
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Persona</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Age Range */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Age Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={ageRange[0]}
              onChange={e => setAgeRange([+e.target.value, ageRange[1]])}
              className="w-1/2 border rounded p-2"
              min={0}
            />
            <input
              type="number"
              value={ageRange[1]}
              onChange={e => setAgeRange([ageRange[0], +e.target.value])}
              className="w-1/2 border rounded p-2"
              min={0}
            />
          </div>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            value={gender}
            onChange={e => setGender(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="Any">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="e.g. London, UK"
          />
        </div>

        {/* Interests */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Interests</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={interestInput}
              onChange={e => setInterestInput(e.target.value)}
              className="flex-1 border rounded p-2"
              placeholder="Add interest"
            />
            <button
              onClick={handleAddInterest}
              className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {modalInterests.map(interest => (
              <span
                key={interest}
                className="bg-gray-200 text-sm px-2 py-1 rounded-full flex items-center gap-1"
              >
                {interest}
                <button
                  onClick={() => handleRemoveInterest(interest)}
                  className="text-gray-500 hover:text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonaEditModal;
