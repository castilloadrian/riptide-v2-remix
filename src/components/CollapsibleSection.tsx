
import { FC, useState, ReactNode } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection: FC<CollapsibleSectionProps> = ({ 
  title, 
  children,
  defaultOpen = true
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="section-header" onClick={toggleOpen}>
        <span>{title}</span>
        {isOpen ? (
          <ChevronDown className="w-5 h-5" />
        ) : (
          <ChevronRight className="w-5 h-5" />
        )}
      </div>
      
      <div className={`section-content ${isOpen ? 'expanded' : 'collapsed'}`}>
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;
