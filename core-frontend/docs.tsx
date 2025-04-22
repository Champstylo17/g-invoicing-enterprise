import dynamic from "next/dynamic";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });
import "swagger-ui-react/swagger-ui.css";

export default function APIDocs() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>API Documentation</h1>
      <SwaggerUI url="/openapi.json" />
    </div>
  );
}