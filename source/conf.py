# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import os
import sys

from pathlib import Path

project = 'CIT Documentation'
copyright = '2024, Transfer Online.'
html_title = ''
author = ''
release = '1'

language = 'en'

sys.path.append(os.path.abspath('_ext'))
import base64
source_suffix = ['.rst', '.md']
# -- General configuration ---------------------------------------------------

extensions = [
    'sphinx.ext.intersphinx',
   # 'sphinx.ext.autosectionlabel',
    'rst2pdf.pdfbuilder',
    'sphinx.ext.todo',
    'sphinx_search.extension',
    'sphinx_prompt',
    'sphinx.builders.linkcheck',
    'sphinx_copybutton',
    'sphinx_togglebutton',
    'sphinx_tippy',
   # 'hoverxref.extension',
    'myst_parser',
    'sphinx_design']

todo_include_todos = True

tippy_rtd_urls = [
    "https://www.sphinx-doc.org/en/master/",
    "https://transferonline.com/",
    "http://127.0.0.1:8000/"
]

myst_enable_extensions = [
    "attrs_inline",
    "colon_fence",
    "tasklist"


]

'''
# Read the binary data
png_binary_data = Path("_static/upload-button.png").read_bytes()
# Encode it in Base64 so you can embed it inline
upload_button_png_encoded = base64.b64encode(png_binary_data).decode('utf-8')

upload_button_b64 = base64.b64encode(png_binary_data).decode("utf-8")
'''

'''
with open("_static/upload-button.png", "rb") as f:
    upload_button_b64 = base64.b64encode(f.read()).decode("utf-8")'''

tippy_custom_tips = {
    "#upload-button": (
        "<img src='/_static/solo_app/Universal/buttons/upload-button.png' "
        "alt='Upload Button' style='width:200px;'>"
    ),
    "#file-explorer-open": (
        "<img src='_static/solo_app/Universal/file-explorer-open.png' "
        "alt='File Explorer Open' style='width:200px;'>"
    ),
    "#new-beneficiary-button": (
        "<img src='/_static/solo_app/Beneficiaries/new-beneficiary.png' "
        "alt='New Beneficiary Button' style='width:200px;'>"
    ),
    "#delete-icon": (
        "<img src='./_static/solo_app/Universal/icons/delete-icon.png' "
        "alt='Delete Icon' style='width:200px;'>"
    ),
    "#upload-logo-button": (
        "<img src='../_static/solo_app/Profile/upload-logo-section/upload-logo-button.png' "
        "alt='Upload Logo Button' style='width:200px;'>"
    ),
    "#view-more-icon": (
        "<img src='../../_static/solo_app/Universal/icons/view-more-icon.png' "
        "alt='View More Icon' style='width:200px;'>"
    ),
    "#manage-button": (
        "<img src='_static/solo_app/Universal/buttons/manage-button.png' "
        "alt='Manage Button' style='width:200px;'>"
    ),
    "#edit-permissions-icon": (
        "<img src='_static/solo_app/Universal/actions/edit-permissions.png' "
        "alt='Edit Permissions Icon' style='width:200px;'>"
    ),
    "#new-user-button": (
        "<img src='_static/solo_app/Universal/buttons/new-user.png' "
        "alt='New User Button' style='width:200px;'>"
    ),
    "#menu-icon": (
        "<img src='../_static/solo_app/Universal/icons/menu-icon.png' "
        "alt='Menu Icon' style='width:100%;'>"
    ),
    "#navigating-to-user-detail": (
        "<img src='_static/solo_app/User/User-Detail/navigating-to-user-detail-for-Users.png' "
        "alt='Navigating to User Detail screenshot' style='width:100%;'>"
    ),
}


# Optionally, tweak tippy settings:
tippy_inline = True  # enable inline tips
tippy_enable_mathjax = True


tippy_anchor_parent_selector = "article.bd-article"


pdf_documents = [

]

myst_all_links_external = True
''
'''intersphinx_mapping = {
    'tol': ('https://transferonline.com/', None),
    "sphinx": ("https://www.sphinx-doc.org/en/master", None)
}'''
''
html_theme_options = {
    "repository_url": "https://github.com/levseyd01/SOLO_Review",
    "use_source_button": True,
    "use_edit_page_button": True,
    "path_to_docs": "source",
    "show_nav_level": 2,
    "repository_branch": "main",
    "use_repository_button": True,
    #'language_selector': True,
    "use_issues_button": True,
    #'logo_only': True,
    "collapse_navbar": False,
    "collapse_navigation": False,
    "use_download_button": True
}

#html_js_files = ["js/tippy.js", "js/popper.js"]
tippy_js = [
    "js/popper.min.js",
    "js/tippy.js"
]

# tippy_js = ("https://unpkg.com/@popperjs/core@2", "https://unpkg.com/tippy.js@6")


html_logo = "_static/CIT-Logo-white-background.jpg"

html_theme = 'sphinx_book_theme'

templates_path = ['_templates']
exclude_patterns = ['_sources',
#'_static'
                    '_build', 'Thumbs.db', '.DS_Store', '**/*.ps1']

# -- General configuration ---------------------------------------------------

html_css_files = ["tippy.css", "custom.css"]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output


# html_theme = "sphinx_rtd_theme"
html_static_path = ['_static']


'''
# Hoverxref configuration
hoverxref_auto_ref = True
hoverxref_role_types = {
    'hoverxref': 'tooltip',
    'ref': 'tooltip',
    'doc': 'tooltip',
    'class': 'tooltip',
}
hoverxref_domains = ['py', 'ref']
hoverxref_roles = ['hoverxref', 'ref', 'doc']
hoverxref_tooltip_maxwidth = 450
hoverxref_tooltip_class = 'rst-content'
hoverxref_tooltip_theme = ['tooltipster-shadow', 'tooltipster-shadow-custom']

# Read the Docs specific configuration
hoverxref_api_host = 'https://transferonline-citapp-documentation.readthedocs.io'
hoverxref_project = 'transferonline-citapp-documentation'
hoverxref_version = 'cit-superadmin'
hoverxref_api_version = 'cit-superadmin'
hoverxref_auto_ref = True
hoverxref_ignore_refs = ['genindex', 'modindex', 'search']
'''

suppress_warnings = [
   "undefined"
]