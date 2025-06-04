import { Level } from '../static-data';

export const getColor = (level: Level) => {
  switch (level) {
    case 'High':
      return 'bg-[#FF3B30]';
    case 'Medium':
      return 'bg-[#FFCC00]';
    case 'Low':
      return 'bg-[#00C940]';
  }
};
