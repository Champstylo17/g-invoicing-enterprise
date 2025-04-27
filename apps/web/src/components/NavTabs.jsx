// apps/web/src/components/NavTabs.jsx
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Outlet } from "react-router-dom";

export default function NavTabs() {
  return (
    <Tabs defaultValue="dashboard" className="w-full">
      <TabsList className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-header mb-4">
        {["dashboard","orders","performances","invoices","payments"].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className="px-4 py-2 rounded data-[state=active]:bg-govblue data-[state=active]:text-white"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="dashboard"><Outlet /></TabsContent>
      <TabsContent value="orders"><Outlet /></TabsContent>
      <TabsContent value="performances"><Outlet /></TabsContent>
      <TabsContent value="invoices"><Outlet /></TabsContent>
      <TabsContent value="payments"><Outlet /></TabsContent>
    </Tabs>
  );
}
