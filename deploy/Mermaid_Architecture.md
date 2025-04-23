
```mermaid
graph TD
  A[User] -->|HTTP| B[NGINX Reverse Proxy]
  B -->|/api/*| C[Node.js Backend (Port 3000)]
  B -->|Frontend| D[React/Vite App (Static HTML)]

  subgraph Docker Services
    B
    C
    D
  end
```
