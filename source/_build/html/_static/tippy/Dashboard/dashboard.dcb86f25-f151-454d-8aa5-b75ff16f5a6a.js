selector_to_html = {"a[href=\"#dashboard-table-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard Table Section<a class=\"headerlink\" href=\"#dashboard-table-section\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Dashboard Table</span></span> contains the following columns:</p>", "a[href=\"../Document/ViewMoreDetails/sections/AvailableActions/how-to/how-to-approve-on-off-boarding-documents.html#how-to-approve-uplaoded-documents-pending-approval-tab-example\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Approve Uploaded Document(s)<a class=\"headerlink\" href=\"#how-to-approve-uploaded-document-s\" title=\"Link to this heading\">#</a></h1><p>Follow the instructions below to approve an uploaded document.</p><p><strong>To Approve an Uploaded Document</strong>:</p>", "a[href=\"../Document/CITCorpOffering/cit-corp-offering.html#cit-corporation-offering-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Offering<a class=\"headerlink\" href=\"#cit-corporation-offering\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corp Offering</span></span> page helps you track the progress of every offering made by CIT Corporations.</p><p>This section also allows you to:</p>", "a[href=\"../Document/CITCorpOnboarding/cit-corp-onboarding.html#cit-corporation-onboarding-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Onboarding Documents<a class=\"headerlink\" href=\"#cit-corporation-onboarding-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>CIT Corp Onboarding</span></span> section helps you track each user\u2019s onboarding progress to CIT Corporation.</p><p>This <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Section</span></span> section also allows you to:</p>", "a[href=\"#dashboard\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard<a class=\"headerlink\" href=\"#dashboard\" title=\"Link to this heading\">#</a></h1><h2>Dashboard Table Section<a class=\"headerlink\" href=\"#dashboard-table-section\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Dashboard Table</span></span> contains the following columns:</p>", "a[href=\"#id2\"]": "<figure class=\"align-default\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../_images/dashboard-table-section.webp\"><img alt=\"Dashboard Table screenshot\" loading=\"lazy\" src=\"../_images/dashboard-table-section.webp\" style=\"width: 120%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">A high-level overview of all documents and their statuses.</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../Document/ViewMoreDetails/view-status-details-documents.html#onboarding-offering-document-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details: Documents<a class=\"headerlink\" href=\"#view-more-details-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>View More Details</span></span> pages for the <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Onboarding Documents</span></span> and <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Offering Documents</span></span> sections provide similar functionality. The instructions provided here apply to both sections.</p><p>The <a class=\"reference internal\" href=\"#view-more-details\"><span class=\"xref myst\">View More Details</span></a> action for either page will you to the following page:</p>", "a[href=\"../Account/sponsorship-organization/sponsorship-organizations.html#sponsorship-organization-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsorship Organizations<a class=\"headerlink\" href=\"#sponsorship-organizations\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Sponsorship Organizations</span></span> page allows you to:</p>"}
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
