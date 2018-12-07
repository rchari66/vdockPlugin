### VdockPlugin
This is a vdockPlugin for cloud9 ide. This plugin comes with for [vdock](https://github.com/rchari66/vdock) tool.


### To add it your cloud9 ide
#### Step 1:
From `Cloud9` menu(top-left corner); select menu-option `Open Your Init Script` to open `init.js`. Now add below content to `init.js`
```
services.pluginManager.loadPackage([
    "https://techtaste.me/vdock-plugin/c9build/package.vdockPlugin.js",
]);
```
#### Step 2:
Open Cloud9 menu and click on `Restart cloud9`(short cut: `command + R` for mac)

#### Step 3: Create new snippet files[Optional]
Create snippet files "/ws/vdockPlugin/snippets".
Restart Cloud9 again as shown in `Step 2`.

`Note:` You have to `Restart cloud9` each time a new snippet file is added or edited old file(s) for changes to take affect.

[ReferHere](https://cloud9-sdk.readme.io/docs/snippets) to know how to create cloud9-snippets files.