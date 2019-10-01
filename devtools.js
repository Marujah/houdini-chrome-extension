chrome.devtools.panels.create(
    "Houdini",
    "/icons/houdini-hat.png",
    "panel.html",
    function(panel) {
        console.log('inside the panel', panel);
    }
);