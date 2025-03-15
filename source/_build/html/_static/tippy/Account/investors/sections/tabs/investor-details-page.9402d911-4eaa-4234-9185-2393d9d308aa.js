selector_to_html = {"a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"Account/investors/_static/solo_app/Universal/InvestorList/ViewInvestorInformation/view-investor-information-save-location.webp\" id=\"investor-details-save-changes\"><img alt=\"Account/investors/_static/solo_app/Universal/InvestorList/ViewInvestorInformation/view-investor-information-save-location.webp\" id=\"investor-details-save-changes\" loading=\"lazy\" src=\"Account/investors/_static/solo_app/Universal/InvestorList/ViewInvestorInformation/view-investor-information-save-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Investor Details Save Changes</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#primary-and-mailing-address\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Primary and Mailing Address<a class=\"headerlink\" href=\"#primary-and-mailing-address\" title=\"Link to this heading\">#</a></h2><p>See <a class=\"reference internal\" href=\"../../../../Profile/profile.html#primary-address-profile-section-company-information\"><span class=\"std std-ref\">Primary and Mailing Address</span></a> section for details.</p><p><strong>To Edit an Investor\u2019s Details:</strong></p>", "a[href=\"../../../../Profile/profile.html#primary-address-profile-section-company-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id15\" role=\"doc-backlink\">Primary Address</a><a class=\"headerlink\" href=\"#primary-address\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Primary Address</span></span> section is where you can change the primary location of your company.</p>", "a[href=\"#available-actions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions<a class=\"headerlink\" href=\"#available-actions\" title=\"Link to this heading\">#</a></h2><p>The following actions are available from the <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Investor Details</span></span> tab:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../../../_images/view-investor-information-tab.webp\" id=\"investor-details-tab-location\"><img alt=\"../../../../_images/view-investor-information-tab.webp\" id=\"investor-details-tab-location\" loading=\"lazy\" src=\"../../../../_images/view-investor-information-tab.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Investor Details Tab Location</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#available-information\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Available Information<a class=\"headerlink\" href=\"#available-information\" title=\"Link to this heading\">#</a></h3><p>The Investor Details tab displays the following information categories:</p>", "a[href=\"#personal-information\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Personal Information<a class=\"headerlink\" href=\"#personal-information\" title=\"Link to this heading\">#</a></h4><p>The <span class=\"subsection-reference\"><span class=\"visually-hidden\">Subsection: </span><span>Personal Information</span></span> displays:</p>", "a[href=\"#investor-information-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Investor Information Section<a class=\"headerlink\" href=\"#investor-information-section\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Investor Information</span></span> section contains key details about the investor in a structured format:</p>", "a[href=\"#investor-details-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Investor Details Tab<a class=\"headerlink\" href=\"#investor-details-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Investor Details</span></span> tab provides comprehensive information about the selected investor, including personal information, contact details, and investment preferences.</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../../../_images/view-investor-information-tab-investor-info-section.webp\" id=\"id1\"><img alt=\"../../../../_images/view-investor-information-tab-investor-info-section.webp\" id=\"id1\" loading=\"lazy\" src=\"../../../../_images/view-investor-information-tab-investor-info-section.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Investor Information Section</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#save-changes\"]": "<img src='/_static/solo_app/Universal/buttons/save-changes.webp' alt='Save Changes' style='width:200px;'>"}
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
