import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchState {
  query: string;
  filters: {
    category: string;
    priceRange: [number, number];
    size: string;
    color: string;
    rating: number;
  };
  results: any[];
  isLoading: boolean;
}

interface SearchContextType {
  searchState: SearchState;
  setQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchState['filters']>) => void;
  performSearch: (query: string) => void;
  clearSearch: () => void;
}

const initialState: SearchState = {
  query: '',
  filters: {
    category: '',
    priceRange: [0, 10000],
    size: '',
    color: '',
    rating: 0,
  },
  results: [],
  isLoading: false,
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchState, setSearchState] = useState<SearchState>(initialState);

  const setQuery = (query: string) => {
    setSearchState(prev => ({ ...prev, query }));
  };

  const setFilters = (filters: Partial<SearchState['filters']>) => {
    setSearchState(prev => ({
      ...prev,
      filters: { ...prev.filters, ...filters }
    }));
  };

  const performSearch = async (query: string) => {
    setSearchState(prev => ({ ...prev, isLoading: true, query }));
    
    // Simulate API call
    setTimeout(() => {
      // Mock search results
      const mockResults = [
        {
          id: '1',
          name: 'Navy Blue Scrub Set',
          price: 1899,
          originalPrice: 2499,
          image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          category: 'scrubs',
          rating: 4.7
        },
        // Add more mock results...
      ];
      
      setSearchState(prev => ({
        ...prev,
        results: mockResults,
        isLoading: false
      }));
    }, 1000);
  };

  const clearSearch = () => {
    setSearchState(initialState);
  };

  return (
    <SearchContext.Provider value={{
      searchState,
      setQuery,
      setFilters,
      performSearch,
      clearSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};