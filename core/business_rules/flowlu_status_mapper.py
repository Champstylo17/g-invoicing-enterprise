# Map Flowlu Kanban stages into internal contract status

import json

def get_flowlu_status_map(file="integration/flowlu_kanban_statuses.json"):
    with open(file) as f:
        data = json.load(f)
    return {entry["label"]: entry["order"] for entry in data["statuses"]}