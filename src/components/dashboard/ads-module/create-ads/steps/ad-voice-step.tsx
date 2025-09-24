import { useState } from 'react';
import {} from 'lucide-react';
import { AdVoice, AdVoiceOptions } from '../../../../../static-data';
import AdVoiceCard from './ad-voice-card';

export default function AdVoiceStep() {
  const [selectedStyle, setSelectedStyle] = useState<AdVoice | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {AdVoiceOptions.map(option => {
        return (
          <AdVoiceCard
            option={option}
            key={option.id}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
        );
      })}
    </div>
  );
}
