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
Create a file with ".snippets" extention in "/ws/vdockPlugin/snippets".
E.g: Sample `if else` snippets for javascript can be created with below content

```
# scope: javascript

snippet ife
    if (${1:condition}) {
        ${2}
    } else {
        ${0}
    }
```

#### Step 3:
Open terminal in the ide iteself and run below cmd. This will place vdockPlugin in c9's plugins.
```
$ snippetsUpdate
```
#### Step 4:
Finally open Cloud9 menu and click on `Restart cloud9`(short cut: `command + R` for mac)

To add more javascript snippets simply add snippets to the file.

[ReferHere](https://cloud9-sdk.readme.io/docs/snippets) to know more about cloud9-snippets
