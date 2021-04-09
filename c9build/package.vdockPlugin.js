define("plugins/vdockPlugin/package.vdockPlugin", [], {
    "name": "vdockPlugin",
    "c9": {
        "plugins": [
            {
                "packagePath": "plugins/vdockPlugin/vdockPlugin.bundle"
            }
        ]
    }
});

define("plugins/vdockPlugin/vdockPlugin.bundle",[], function(require, exports, module) {
    main.consumes = [
        "Plugin", "plugin.debug"
    ];
    main.provides = ["vdockPlugin.bundle"];
    return main;
    function main(options, imports, register) {
        var debug = imports["plugin.debug"];
        var Plugin = imports.Plugin;
        var plugin = new Plugin();
        plugin.version = "undefined";
        plugin.on("load", function load() {
            [
                {
                    "type": "snippets",
                    "filename": "code.snippets",
                    "data": "# scope: markdown\n\nsnippet vcode\n\t``` ${1:language}\n\t${2:public static void main(String arg[]) ..}\n\t```"
                },
                {
                    "type": "snippets",
                    "filename": "headings.snippets",
                    "data": "# scope: markdown\n\nsnippet vheading1\n\t# ${1:Heading1}\n\nsnippet vheading2\n\t## ${1:Heading2}\n\nsnippet vh1\n\t# ${1:Heading1}\n\nsnippet vh2\n\t## ${1:Heading2}\n\nsnippet vh3\n\t### ${1:Heading3}\n\nsnippet vh4\n\t#### ${1:Heading4}\n\nsnippet vh5\n\t##### ${1:Heading5}\n\nsnippet vh6\n\t###### ${1:Heading6}\n\nsnippet vcheck\n\thelloworld"
                },
                {
                    "type": "snippets",
                    "filename": "highlights.snippets",
                    "data": "# scope: markdown\n\nsnippet vbold\n\t**${1:BOLD}**\n\nsnippet vitalic\n\t_${1:Italic}_\n\n\nsnippet vblockquote\n\t> ${1:qouted text}\n\nsnippet vunderline\n\t__${1:UnderlineText}__\n\nsnippet vstriketext\n\t~~${1:STRIKE TEXT}~~\n\t\n"
                },
                {
                    "type": "snippets",
                    "filename": "link.snippets",
                    "data": "# scope: markdown\n\nsnippet vlink\n\t[${1:Name}](${2:url})\n\nsnippet vimage\n\t![${1:Alt Text}](${2:shorturl.at/qxFKQ})\n\t\nsnippet vyoutubeSmall\n\t<iframe width=\"480\" height=\"280\"\n\t\tsrc=\"${1:https://www.youtube.com/embed/tgbNymZ7vqY}\">\n\t</iframe>\n\t\n\nsnippet vyoutubeMedium\n\t<iframe width=\"720\" height=\"405\"\n\t\tsrc=\"${1:https://www.youtube.com/embed/tgbNymZ7vqY}\">\n\t</iframe>\n\t\n\nsnippet vyoutubeLarge\n\t<iframe width=\"1056\" height=\"594\"\n\t\tsrc=\"${1:https://www.youtube.com/embed/tgbNymZ7vqY}\">\n\t</iframe>\n\t\nsnippet vreflink\n\t[${1:Ref Name}] [${2:Ref Number}]\n\nsnippet vreflinkSample\n\t[rchari/vdock-tool] [1] is a docker based tool with integreated IDE.\n\tIt's useful for checkout the [code] [2] ,edit in ide, testing(preview) & deployment of [hugo] [3] sites.\n\t\n\t[1]: https://github.com/rchari66/vdock-hugo/blob/master/README.md \"Vdock-tool\"\n\t[2]: https://gohugo.io/ \"hugo site\"\n\t[3]: https://techtaste.me \"Check out hugo blog sample\"\n\nsnippet vdropdown\n\t<details><summary>${1:Title}</summary>\n\t<p>\n\t\n\t${2:Content of dropdown}\n\t\n\t</P>\n\t</details>\n\t"
                },
                {
                    "type": "snippets",
                    "filename": "list.snippets",
                    "data": "# scope: markdown\n\nsnippet vlist\n\t* ${1:List Item 1}\n\t* ${2:List Item 2}\n\nsnippet vunorderedList\n\t* ${1:List Item 1}\n\t* ${2:List Item 2}\n\t\t* ${3:sub list item 1}\n\t\t* ${4:sub list item 2}\n\nsnippet vorderedList\n\t1. ${1: Item 1}\n\t2. ${2: Item 2}\n\t\t1. ${3: Item 1}\n\t\t2. ${4: Item 2}\n\t\t\n\n# task list\nsnippet vtasklist\n\t- [${1:x}] ${2:item}\n\t\n\n\t\n"
                },
                {
                    "type": "snippets",
                    "filename": "table.snippets",
                    "data": "# scope: markdown\n\n## Table snippets\n\n# snippet vtablehelp\n\t\n\t\nsnippet vtablecell\n\t   ${1:data}     | \n\nsnippet vtableheaderseperator\n\t--------------- |\n\n\nsnippet vtable1cellheader\n\t  ${1:Column 1}   |\n\t ---------------- |\n\t\n\nsnippet vtable2headers\n\t  ${1:Column 1}  |  ${2:Column 2}  |\n\t  -------------- |---------------- |\n\t\n\nsnippet vtable3headers\n\t  ${1:Column 1}  |  ${2:Column 2}  | ${3:Column 3}  |\n\t  -------------- |---------------- |---------------- |\n\t\n\nsnippet vtable4headers\n\t  ${1:Column 1}  |  ${2:Column 2}  | ${3:Column 3}  | ${4:Column 4}  |\n\t  -------------- |---------------- |---------------- |---------------- |\n\t\n\nsnippet vtable5headers\n\t  ${1:Column 1}  |  ${2:Column 2}  | ${3:Column 3}   | ${4:Column 4}   | ${5:Column 5}   |\n\t  -------------- |---------------- |---------------- |---------------- |---------------- |\n\t\n\nsnippet vtable6headers\n\t| ${1:Column 1}   |  ${2:Column 2}  |  ${3:Column 3}  |  ${4:Column 4}  |  ${5:Column 5}  |  ${6:Column 6 } |\n\t|---------------- |---------------- |---------------- |---------------- |---------------- |---------------- |\n\t\n\n\nsnippet vtable1cell\n\t${1:table-data}   |\n\t\n\nsnippet vtable2cells\n\t${1:table-data}  |  ${2:table-data}  |\n\t\n\nsnippet vtable3cells\n\t${1:table-data}  |  ${2:table-data}  | ${3:table-data}  |\n\t\n\nsnippet vtable4cells\n\t${1:table-data}  |  ${2:table-data}  | ${3:table-data}  | ${4:table-data}  |\n\t\n\nsnippet vtable5cells\n\t${1:table-data}  |  ${2:table-data}  | ${3:table-data}  | ${4:table-data}  | ${5:table-data}  |\n\t\n\nsnippet vtable6cells\n\t${1:table-data}   |  ${2:table-data}  |  ${3:table-data}  |  ${4:table-data}  |  ${5:table-data}  |  ${6:table-data } \n\n\nsnippet vtcell\n\t   ${1:data}     | \n\nsnippet vtheaderseperator\n\t--------------- |\n\n\nsnippet vt1cellheader\n\t  ${1:Column 1}   |\n\t ---------------- |\n\t\n\nsnippet vt2headers\n\t  ${1:Column 1}  |  ${2:Column 2}  |\n\t  -------------- |---------------- |\n\t\n\nsnippet vt3headers\n\t  ${1:Column 1}  |  ${2:Column 2}  | ${3:Column 3}  |\n\t  -------------- |---------------- |---------------- |\n\t\n\nsnippet vt4headers\n\t  ${1:Column 1}  |  ${2:Column 2}  | ${3:Column 3}  | ${4:Column 4}  |\n\t  -------------- |---------------- |---------------- |---------------- |\n\t\n\nsnippet vt5headers\n\t  ${1:Column 1}  |  ${2:Column 2}  | ${3:Column 3}   | ${4:Column 4}   | ${5:Column 5}   |\n\t  -------------- |---------------- |---------------- |---------------- |---------------- |\n\t\n\nsnippet vt6headers\n\t| ${1:Column 1}   |  ${2:Column 2}  |  ${3:Column 3}  |  ${4:Column 4}  |  ${5:Column 5}  |  ${6:Column 6 } |\n\t|---------------- |---------------- |---------------- |---------------- |---------------- |---------------- |\n\t\n\n\nsnippet vt1cell\n\t${1:table-data}   |\n\t\n\nsnippet vt2cells\n\t${1:table-data}  |  ${2:table-data}  |\n\t\n\nsnippet vt3cells\n\t${1:table-data}  |  ${2:table-data}  | ${3:table-data}  |\n\t\n\nsnippet vt4cells\n\t${1:table-data}  |  ${2:table-data}  | ${3:table-data}  | ${4:table-data}  |\n\t\n\nsnippet vt5cells\n\t${1:table-data}  |  ${2:table-data}  | ${3:table-data}  | ${4:table-data}  | ${5:table-data}  |\n\t\n\nsnippet vt6cells\n\t${1:table-data}   |  ${2:table-data}  |  ${3:table-data}  |  ${4:table-data}  |  ${5:table-data}  |  ${6:table-data } "
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "vdockPlugin", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("vdockPlugin.bundle");
        
        register(null, {"vdockPlugin.bundle": plugin});
    }
});
