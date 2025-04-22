
def generate_insight(query):
    if "overdue" in query.lower():
        return "Agencies with invoices unpaid >90 days: Dept of Energy, VA, DoD."
    elif "top contractors" in query.lower():
        return "Top 5 contractors by volume: Lockheed, Raytheon, Booz Allen, Leidos, SAIC."
    return "No insight available."
