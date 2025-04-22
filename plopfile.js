module.exports = function (plop) {
  plop.setGenerator('route', {
    description: 'Generate a new API route',
    prompts: [{ type: 'input', name: 'name', message: 'Route name?' }],
    actions: [
      {
        type: 'add',
        path: 'apps/api/routes/{{kebabCase name}}.js',
        templateFile: 'tools/plop-templates/route.hbs'
      }
    ]
  });
};