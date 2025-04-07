
import { Link } from 'react-router-dom';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface FooterProps {
  toggleDarkMode?: () => void; // Keep for backward compatibility
  isDarkMode?: boolean; // Keep for backward compatibility
}

const Footer: React.FC<FooterProps> = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                {theme === 'system' ? (
                  <Monitor className="h-4 w-4" />
                ) : resolvedTheme === 'dark' ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <Monitor className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
