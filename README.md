# Error Logging

### %s + JSON.stringify()
```
Application failed: {}
```

### Template literals `${error}`
```
Application failed: Error: Failed to read from the database.
```

### %j, json directive
```
Application failed: {}
```

### %o, object directive
```
Application failed: Error: Failed to read from the database.
    at file:///home/vitor.gouveia/www/minu/error-logging/lib/index.js:3:15
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12) {
  [stack]: 'Error: Failed to read from the database.\n' +
    '    at file:///home/vitor.gouveia/www/minu/error-logging/lib/index.js:3:15\n' +
    '    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)\n' +
    '    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)\n' +
    '    at async loadESM (node:internal/process/esm_loader:28:7)\n' +
    '    at async handleMainPromise (node:internal/modules/run_main:113:12)',
  [message]: 'Failed to read from the database.'
}
```

### %s + JSON.stringify(error, ['message', 'stack'])
```
Application failed: {"message":"Failed to read from the database.","stack":"Error: Failed to read from the database.\n    at file:///home/vitor.gouveia/www/minu/error-logging/lib/index.js:3:15\n    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)\n    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)\n    at async loadESM (node:internal/process/esm_loader:28:7)\n    at async handleMainPromise (node:internal/modules/run_main:113:12)"}
```

### error.message
```
Application failed: Failed to read from the database.
```

[source code](./lib/index.js)