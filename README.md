# node-import-esm-to-cjs
NodeJS code example of a way to import an ESM module into CommonJS module

## Demo

1. Install the application
```shell
npm install
```

2. Run the application
```shell
node index.js
```
Output:
```shell
[zgrinber@zgrinber node-import-esm-to-cjs]$ node index.js | jq .summary
(node:1598079) ExperimentalWarning: Import assertions are not a stable feature of the JavaScript language. Avoid relying on their current behavior and syntax as those might change in a future version of Node.js.
(Use `node --trace-warnings ...` to show where the warning was created)
(node:1598079) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
{
  "dependencies": {
    "scanned": 1,
    "transitive": 103
  },
  "vulnerabilities": {
    "direct": 0,
    "total": 0,
    "critical": 0,
    "high": 0,
    "medium": 0,
    "low": 0
  },
  "providerStatuses": [
    {
      "ok": true,
      "provider": "snyk",
      "status": 200,
      "message": "OK"
    }
  ]
}

```
