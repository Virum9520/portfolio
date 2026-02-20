import { createContext, useContext, useState } from 'react';

const SkillFilterContext = createContext(null);

export function SkillFilterProvider({ children }) {
  const [skillFilter, setSkillFilter] = useState(null);

  return (
    <SkillFilterContext.Provider value={{ skillFilter, setSkillFilter }}>
      {children}
    </SkillFilterContext.Provider>
  );
}

export function useSkillFilter() {
  const context = useContext(SkillFilterContext);
  return context || { skillFilter: null, setSkillFilter: () => {} };
}
