chrome.devtools.panels.create(
    "Houdini",
    "/icons/houdini-hat.png",
    "panel.html",
    function(panel) {
        console.log('inside the panel', panel);
        chrome.extension.onRequest.addListener(
            function (request, sender, sendResponse) {
                // LOG THE CONTENTS HERE
                console.log(request.content);
            });

        chrome.tabs.getSelected(null, function (tab) {

            // Now inject a script onto the page
            chrome.tabs.executeScript(tab.id, {
                code: "chrome.extension.sendRequest({content: document.scripts}, function(response) { console.log('success'); });"
            }, function () { console.log('done'); });

        });
    }
);