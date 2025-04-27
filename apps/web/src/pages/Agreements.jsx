import React, { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Agreements() {
  const [agreements, setAgreements] = useState(null);

  useEffect(() => {
    fetch("/api/agreements")
      .then((res) => res.json())
      .then(setAgreements)
      .catch((err) => {
        console.error("Failed to load agreements:", err);
        setAgreements([]);
      });
  }, []);

  if (!agreements) {
    return (
      <div className="flex justify-center items-center h-full">
        <LoadingSpinner />
      </div>
    );
  }

  if (!agreements) return <LoadingSpinner />;
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-govblue">Agreements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agreements.map((ag) => (
          <Card key={ag.id} className="shadow-card">
            <CardHeader>
              <CardTitle>{ag.title || `Agreement #${ag.id}`}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <span className="font-semibold">Agency:</span> {ag.agencyName}
              </p>
              <p>
                <span className="font-semibold">Amount:</span> $
                {ag.amount.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Status:</span> {ag.status}
              </p>
              <p>
                <span className="font-semibold">Start:</span>{" "}
                {new Date(ag.startDate).toLocaleDateString()}
              </p>
              <p>
                <span className="font-semibold">End:</span>{" "}
                {new Date(ag.endDate).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
