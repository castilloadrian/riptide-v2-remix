
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

interface FooterProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <footer className="mt-auto py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="w-1/3">
          {/* Empty div for spacing */}
        </div>
        <div className="w-1/3 flex justify-center">
          <Link to="/learn-more" className="text-primary hover:underline text-sm">
            Learn More
          </Link>
        </div>
        <div className="w-1/3 flex justify-end">
          <Toggle 
            pressed={isDarkMode} 
            onPressedChange={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="data-[state=on]:bg-gray-800 data-[state=on]:text-white"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </Toggle>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
