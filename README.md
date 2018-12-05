### VdockPlugin
This is a vdockPlugin for cloud9 ide. This plugin is meant for [vdock-hugo](https://github.com/rchari66/vdock-hugo) tool.

### Adding custom snippets to vdock-hugo
#### Step 1:
From `Cloud9` menu(top-left corner); select menu-option `Open Your Init Script` to open `init.js`. Now add/append below content to `init.js`
```
services.pluginManager.loadPackage([
    "~/.c9/plugins/vdockPlugin/package.json",
]);
```
#### Step 2:
Open Cloud9 menu and click on `Restart cloud9`(short cut: `command + R` for mac)

#### Step 3:
Create snippet files "/ws/vdockPlugin/snippets" and run below cmd in terminal. 
This will place our custome plugin `vdockPlugin` in c9's plugin path.
```
$ snippetsUpdate
```

#### step 4:
Restart Cloud9 again as in shown `Step 2`.

[ReferHere](https://cloud9-sdk.readme.io/docs/snippets) to know how to create cloud9-snippets files.
