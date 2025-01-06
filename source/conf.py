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
   # 'sphinx.ext.intersphinx',
    #'sphinx.ext.autosectionlabel',
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
    "https://transferonline.com/"
]

myst_enable_extensions = [
    "attrs_inline",
    "colon_fence",
    "tasklist"


]

# Read the binary data
png_binary_data = Path("_static/upload-button.png").read_bytes()
# Encode it in Base64 so you can embed it inline
upload_button_png_encoded = base64.b64encode(png_binary_data).decode('utf-8')

upload_button_b64 = base64.b64encode(png_binary_data).decode("utf-8")

'''
with open("_static/upload-button.png", "rb") as f:
    upload_button_b64 = base64.b64encode(f.read()).decode("utf-8")'''

tippy_custom_tips={

  "upload-logo-button": "<img src='upload-button.png' alt='Upload Button'>",



} 


tippy_anchor_parent_selector = "article.bd-article"


pdf_documents = [
    ('documents/solo/solo_approved/techstackguide/techstackguide_01',
     'techstackguide_01',
     'Tech Stack Guide',
     'TransferOnline',
     'manual'),
]

#myst_all_links_external = True
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
    "repository_branch": "main",
    "use_repository_button": True,
    'language_selector': True,
    "use_issues_button": True,
    'logo_only': True,
    "collapse_navbar": False,
    "use_download_button": True
}

#html_js_files = ["js/tippy.js", "js/popper.js"]
tippy_js = ["js/popper.min.js", "js/tippy.js"]


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