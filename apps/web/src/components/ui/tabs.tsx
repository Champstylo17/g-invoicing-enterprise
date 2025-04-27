import React, { createContext, useContext, useState } from "react";

// Context to share active tab and setter
const TabsContext = createContext({
  active: undefined,
  setActive: () => {}
});

/**
 * <Tabs> — container for tab triggers & tab panels.
 * Props:
 *  - defaultValue: the tab value to activate initially
 *  - value, onValueChange: for controlled usage (optional)
 */
export function Tabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  className = ""
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const active = isControlled ? controlledValue : internalValue;
  const setActive = (val) => {
    if (!isControlled) setInternalValue(val);
    onValueChange?.(val);
  };

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

/**
 * <TabsList> — wrapper around the tab triggers
 */
export function TabsList({ children, className = "" }) {
  return <div className={`flex space-x-2 ${className}`}>{children}</div>;
}

/**
 * <TabsTrigger> — a clickable tab
 * Props:
 *  - value: the tab’s unique value
 */
export function TabsTrigger({ value, children, className = "" }) {
  const { active, setActive } = useContext(TabsContext);
  const isActive = active === value;
  return (
    <button
      className={`
        px-4 py-2 rounded-md text-sm font-medium
        transition 
        ${isActive 
          ? "bg-govblue text-white" 
          : "bg-white text-gray-700 hover:bg-govgray hover:text-govblue"}
        ${className}
      `}
      onClick={() => setActive(value)}
    >
      {children}
    </button>
  );
}

/**
 * <TabsContent> — the panel shown when its value matches active
 */
export function TabsContent({ value, children, className = "" }) {
  const { active } = useContext(TabsContext);
  if (active !== value) return null;
  return <div className={className}>{children}</div>;
}
