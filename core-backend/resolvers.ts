export const resolvers = {
  Query: {
    invoices: async () => {
      return [
        { id: "1", description: "Sample Invoice", amount: 200.0, status: "approved", createdAt: "2024-01-01" },
      ];
    }
  }
};