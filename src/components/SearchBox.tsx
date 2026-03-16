import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchBoxProps {
  isArabic: boolean;
  scrollToSection: (section: string) => void;
  content: any;
}

const SearchBox: React.FC<SearchBoxProps> = ({ isArabic, scrollToSection, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Search data - ensure content exists before accessing properties
  const searchData = React.useMemo(() => {
    if (!content || !content.nav || !content.services) {
      return [];
    }

    return [
      { id: 'home', title: content.nav.home || 'Home', section: 'home', type: 'navigation' },
      { id: 'about', title: content.nav.about || 'About', section: 'about', type: 'navigation' },
      { id: 'services', title: content.nav.services || 'Services', section: 'services', type: 'navigation' },
      { id: 'team', title: content.nav.team || 'Team', section: 'team', type: 'navigation' },
      { id: 'projects', title: content.nav.projects || 'Projects', section: 'projects', type: 'navigation' },
      { id: 'contact', title: content.nav.contact || 'Contact', section: 'contact', type: 'navigation' },
      { id: 'civil', title: content.services.civil?.title || 'Civil Work', section: 'services', type: 'service' },
      { id: 'mechanical', title: content.services.mechanical?.title || 'Mechanical Work', section: 'services', type: 'service' },
      { id: 'electrical', title: content.services.electrical?.title || 'Electrical Work', section: 'services', type: 'service' },
      { id: 'waterproofing', title: content.services.waterproofing?.title || 'Waterproofing', section: 'services', type: 'service' },
      { id: 'pipeline', title: content.services.pipeline?.title || 'Pipeline Work', section: 'services', type: 'service' },
      { id: 'plumbing', title: content.services.plumbing?.title || 'Plumbing Work', section: 'services', type: 'service' },
      { id: 'ac-technician', title: content.services.acTechnician?.title || 'AC Technician Services', section: 'services', type: 'service' },
    ];
  }, [content]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm, searchData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (result: any) => {
    console.log('Search result clicked:', result);
    scrollToSection(result.section);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Focus the input when opening
      setTimeout(() => {
        const input = searchRef.current?.querySelector('input');
        if (input) {
          input.focus();
        }
      }, 100);
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <Button
        onClick={handleSearchToggle}
        variant="outline"
        size="sm"
        className="flex items-center space-x-2 bg-white/90 hover:bg-white border-slate-300"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline text-sm">
          {isArabic ? 'بحث...' : 'Search...'}
        </span>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 z-50">
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder={isArabic ? 'ابحث عن الخدمات أو الأقسام...' : 'Search services or sections...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 outline-none text-sm border-none focus:ring-0"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {results.length > 0 && (
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
                  >
                    <div className="text-sm font-medium text-slate-900">
                      {result.title}
                    </div>
                    <div className="text-xs text-slate-500 capitalize">
                      {result.type === 'navigation' ? (isArabic ? 'قسم' : 'Section') : (isArabic ? 'خدمة' : 'Service')}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {searchTerm && results.length === 0 && (
              <div className="text-center py-4 text-slate-500 text-sm">
                {isArabic ? 'لا توجد نتائج' : 'No results found'}
              </div>
            )}

            {!searchTerm && (
              <div className="text-center py-4 text-slate-400 text-sm">
                {isArabic ? 'ابدأ الكتابة للبحث...' : 'Start typing to search...'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;