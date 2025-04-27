// apps/web/src/components/ui/ThemeToggle.tsx
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
      {dark ? "Light" : "Dark"}
    </button>
  );
}
