selector_to_html = {"a[href=\"#my-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">My Accounts<a class=\"headerlink\" href=\"#my-accounts\" title=\"Link to this heading\">#</a></h1><h2>Managing Different Accounts<a class=\"headerlink\" href=\"#managing-different-accounts\" title=\"Link to this heading\">#</a></h2><p>Managing accounts allows you to quickly navigate between the homepages of different accounts.</p><p>To <strong>Manage an Account</strong>:</p>", "a[href=\"indentifying-accounts.html#account-being-managed\"]": "<img alt=\"../_images/account-being-managed-location.webp\" id=\"account-being-managed\" loading=\"lazy\" src=\"../_images/account-being-managed-location.webp\" style=\"width: 50%;\"/>", "a[href=\"#managing-different-accounts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Managing Different Accounts<a class=\"headerlink\" href=\"#managing-different-accounts\" title=\"Link to this heading\">#</a></h2><p>Managing accounts allows you to quickly navigate between the homepages of different accounts.</p><p>To <strong>Manage an Account</strong>:</p>", "a[href=\"#manage-button\"]": "<img src='/_static/solo_app/Universal/buttons/manage-button.webp' alt='Manage Button' style='width:200px;'>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
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
