const SwaggerParser = require("swagger-parser");
SwaggerParser.validate("docs/openapi/openapi.json").then(api => {
  console.log("API name: %s, Version: %s", api.info.title, api.info.version);
}).catch(err => {
  console.error("OpenAPI validation failed:", err);
  process.exit(1);
});
