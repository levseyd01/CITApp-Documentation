# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import os
import sys


project = 'CIT Documentation'
copyright = '2024, Transfer Online.'
html_title = ''
author = ''
release = '1'

language = 'en'

sys.path.append(os.path.abspath('_ext'))

source_suffix = ['.rst', '.md']
# -- General configuration ---------------------------------------------------


myst_url_schemes = (
    "http", 
    "https",
    "mailto",
    "ftp",
   # "tippy"
    )


extensions = [
  #  'sphinx.ext.intersphinx',
   # 'sphinx.ext.autosectionlabel',
   # 'rst2pdf.pdfbuilder',
  #  'sphinx.ext.todo',
   # 'sphinx_search.extension',
 #   'sphinx_prompt',
    #'sphinx.builders.linkcheck',
    #'sphinx_copybutton',
 #   'sphinx_togglebutton',
    'sphinx_tippy',
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

# myst_all_links_external = True

tippy_props = {
    "placement": "auto-start",
    "maxWidth": 500,
    "interactive": False,
    "theme": "material",
    "duration": [200, 100],
    "delay": [200, 500]
}

html_theme_options = {
    "repository_url": "https://github.com/levseyd01/SOLO_Review",
    "use_source_button": True,
    "use_edit_page_button": True,
    "path_to_docs": "source",
    "repository_branch": "main",
    "use_repository_button": True,
    "use_issues_button": True,
    "collapse_navbar": False,
    "use_download_button": True
}



# For Furo theme:
tippy_anchor_parent_selector = "div.content"
# For pydata theme:
tippy_anchor_parent_selector = "article.bd-article"


html_last_updated_fmt = "%b %d, %Y"




html_js_files = [
    "_static/js/popper.min.js",
    "_static/js/tippy-bundle.umd.min.js",
]

tippy_js = [
    "_static/js/popper.min.js",
    "_static/js/tippy-bundle.umd.min.js",
]


'''html_js_files = [
    "https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js",
    "https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js",
]

tippy_js = [
    "https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js",
    "https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js",
]'''


# _static\solo_app\Universal\buttons\upload-button.png
tippy_custom_tips = {
    "test-key": "Hello from Tippy!",
    "my-key": "This is my custom tooltip text!",
    "upload-logo-button": "<img src='solo_app/Universal/buttons/upload-button.png' style='max-width:1000px'>"
}


tippy_tip_selector = "figure, table, img, p, aside, div.admonition, div.literal-block-wrapper"


pdf_documents = [
    ('documents/solo/solo_approved/techstackguide/techstackguide_01',
     'techstackguide_01',
     'Tech Stack Guide',
     'TransferOnline',
     'manual'),
]

# Intersphinx configuration
intersphinx_mapping = {
    "python": ("https://docs.python.org/3", None),
    "sphinx": ("https://www.sphinx-doc.org/en/master", None)
}

html_logo = "_static/CIT-Logo-white-background.jpg"

html_theme = 'sphinx_book_theme'

templates_path = ['_templates']
exclude_patterns = [
    '_sources',
   # '_static',
    '_build', 
    'Thumbs.db',
    '.DS_Store',
     '**/*.ps1']

# -- General configuration ---------------------------------------------------

html_css_files = [
   # "tippy.css"
 #"custom.css"
 ]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output


# html_theme = "sphinx_rtd_theme"
html_static_path = ['_static']

# Suppress warnings
suppress_warnings = [
    "myst.header",
    "undefined",
    "myst.directive_option",
    "design.grid",
    "toc.not_readable",
    "autosectionlabel"
]

# Default grid settings
sd_grid_default = {
    "gutter": 2
}