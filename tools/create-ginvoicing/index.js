#!/usr/bin/env node
const { execSync } = require('child_process');
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

(async () => {
  console.log(chalk.greenBright('\n🚀 Welcome to create-ginvoicing!\n'));

  const { project } = await inquirer.prompt([
    { name: 'project', message: 'Project folder name:', default: 'g-invoicing-app' }
  ]);

  const { flags, rbac, graphql, tenants } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'flags',
      message: 'Select optional features to include:',
      choices: [
        { name: 'Enable GraphQL API', value: 'graphql' },
        { name: 'Include Multi-Tenant Support', value: 'tenants' },
        { name: 'Include RBAC system', value: 'rbac' },
        { name: 'Enable Feature Flags', value: 'flags' }
      ]
    }
  ]);

  console.log(chalk.yellowBright(`\n📦 Creating project in ./${project}\n`));
  execSync(`npx degit your-org/g-invoicing-template ${project}`, { stdio: 'inherit' });

  console.log(chalk.blueBright('\n🔧 Configuring your project...'));

  const opts = {
    graphql: flags.includes('graphql'),
    tenants: flags.includes('tenants'),
    rbac: flags.includes('rbac'),
    flags: flags.includes('flags')
  };

  fs.writeFileSync(`${project}/CONFIG_SETUP.json`, JSON.stringify(opts, null, 2));

  console.log(chalk.greenBright(`\n✅ Done! cd ${project} && npm install && npm run dev\n`));
})();