
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
        <div>
          <Link to="/learn-more" className="text-primary hover:underline text-sm">
            Learn More
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Toggle 
            pressed={isDarkMode} 
            onPressedChange={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="data-[state=on]:bg-gray-800 data-[state=on]:text-white"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </Toggle>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
