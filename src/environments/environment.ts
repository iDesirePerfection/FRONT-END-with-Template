import { User } from "app/services/user-services/models/user";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


export const environment = {
  production: false,
  backend_url: 'http://localhost:9080/profesional-network-web/rest/',
  agora: {
    appId: '000a4932bece4a7d9f5fbb7f36b66218'
  }
  
};


