selector_to_html = {"a[href=\"#sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sections<a class=\"headerlink\" href=\"#sections\" title=\"Link to this heading\">#</a></h2>", "a[href=\"Account/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Account Section<a class=\"headerlink\" href=\"#account-section\" title=\"Link to this heading\">#</a></h1><p>The <strong>Account</strong> section allows you to manage accounts in the system based on the type of account that exists.</p><p>Each page includes a table with the following information:</p>", "a[href=\"Profile/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Profile Section<a class=\"headerlink\" href=\"#profile-section\" title=\"Link to this heading\">#</a></h1><p>The <strong>Profile</strong> section allows you to view and change the following information:</p>", "a[href=\"#cit-services-user-manual\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Services User Manual<a class=\"headerlink\" href=\"#cit-services-user-manual\" title=\"Link to this heading\">#</a></h1><p>Welcome to the <strong>User Manual</strong> for <strong>CIT Service</strong> Users.</p><p>See below for a list of available features and sections.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
