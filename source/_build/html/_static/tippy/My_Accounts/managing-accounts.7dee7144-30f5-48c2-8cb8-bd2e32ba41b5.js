selector_to_html = {"a[href=\"#account-being-managed\"]": "<img alt=\"../_images/account-being-managed-location.webp\" id=\"account-being-managed\" loading=\"lazy\" src=\"../_images/account-being-managed-location.webp\" style=\"width: 50%;\"/>", "a[href=\"#managing-different-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Managing Different Accounts<a class=\"headerlink\" href=\"#managing-different-accounts\" title=\"Link to this heading\">#</a></h1><p>Managing accounts allows you to quickly navigate between the homepages of different accounts.</p><p>To <strong>Manage an Account</strong>:</p>", "a[href=\"#identifying-the-current-account\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Identifying the Current Account<a class=\"headerlink\" href=\"#identifying-the-current-account\" title=\"Link to this heading\">#</a></h2><p>Identify the current account you are using by looking for the account name next to your profile picture.</p>", "a[href=\"#manage-button\"]": "<img src='/_static/solo_app/Universal/buttons/manage-button.webp' alt='Manage Button' style='width:200px;'>"}
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
