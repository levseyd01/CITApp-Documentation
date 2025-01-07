selector_to_html = {"a[href=\"#managing-different-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Managing Different Accounts<a class=\"headerlink\" href=\"#managing-different-accounts\" title=\"Link to this heading\">#</a></h1><p>You can select an account to manage by clicking the <a class=\"reference internal\" href=\"../Universal/logos.html#manage-button\"><span class=\"std std-ref\">Manage</span></a> button associated with the desired account.</p><p>To <strong>Manage an Account</strong>:</p>", "a[href=\"#my-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">My Accounts<a class=\"headerlink\" href=\"#my-accounts\" title=\"Link to this heading\">#</a></h1><p>The <strong>My Accounts</strong> sections displays an overview of the various accounts that you can manage.</p>", "a[href=\"#identifying-the-current-account\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Identifying the Current Account<a class=\"headerlink\" href=\"#identifying-the-current-account\" title=\"Link to this heading\">#</a></h2><p>Identify the current account you are using by looking for the account name next to your profile picture.</p>", "a[href=\"../Universal/logos.html#manage-button\"]": "<img alt=\"../_static/solo_app/Universal/buttons/manage-button.png\" class=\"align-center\" id=\"manage-button\" src=\"../_static/solo_app/Universal/buttons/manage-button.png\" style=\"width: 200px;\"/>", "a[href=\"#account-being-managed\"]": "<figure class=\"align-center\" id=\"account-being-managed\">\n<a class=\"reference internal image-reference\" href=\"../_images/account-being-managed-location.png\"><img alt=\"../_images/account-being-managed-location.png\" src=\"../_images/account-being-managed-location.png\" style=\"width: 50%;\"/>\n</a>\n</figure>"}
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
