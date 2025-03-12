selector_to_html = {"a[href=\"../Universal/CompanyInformation/upload-logo.html#general-upload-logo-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Upload Logo<a class=\"headerlink\" href=\"#upload-logo\" title=\"Link to this heading\">#</a></h1><p><strong>To Upload:</strong></p>", "a[href=\"sections/name-and-contact-information.html#profile-section-name-contact-information\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Company Profile: Name and Contact Information<a class=\"headerlink\" href=\"#company-profile-name-and-contact-information\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Info</span></span> section of the <strong>Profile</strong> screen allows you to edit various details about your company.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../_static/solo_app/Profile/information-section/main-screen.webp\" id=\"profile-screen-information-section\"><img alt=\"../_static/solo_app/Profile/information-section/main-screen.webp\" id=\"profile-screen-information-section\" loading=\"lazy\" src=\"../_static/solo_app/Profile/information-section/main-screen.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Information Section</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"sections/primary-address.html#primary-address-profile-section-company-information\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Company Profile: Primary Adress<a class=\"headerlink\" href=\"#company-profile-primary-adress\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Primary Address</span></span> section is where you can change the primary location of your company.</p>", "a[href=\"#profile\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Profile<a class=\"headerlink\" href=\"#profile\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Profile Page</span></span> allows you edit the following information about your company:</p>", "a[href=\"sections/primary-address.html#mailing-address-profile-section-company-information\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Company Profile: Mailing Address<a class=\"headerlink\" href=\"#company-profile-mailing-address\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Mailing Address</span></span> section allows you to update your company\u2019s mailing address if it\u2019s different from the primary address.</p>"}
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
