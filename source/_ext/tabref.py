from docutils import nodes
from sphinx.util.docutils import SphinxRole

class TabRole(SphinxRole):
    def run(self):
        node = nodes.inline(self.text, self.text)
        node['classes'] = ['tab-reference']
        return [node], []

def setup(app):
    app.add_role('tabref', TabRole())
    
    # Add CSS to style tab references
    app.add_css_file('css/custom.css')
    
    return {
        'version': '0.1',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }