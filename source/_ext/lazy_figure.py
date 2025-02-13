# lazyfigure.py

from docutils.parsers.rst.directives.images import Figure
from sphinx.util.docutils import SphinxDirective
from docutils import nodes

class LazyFigureDirective(Figure):
    """
    A custom directive that behaves like the standard figure directive
    but adds loading="lazy" to the underlying image node.
    """
    def run(self):
        # 1. Let the normal Figure directive parse all options.
        figure_nodes = super().run()
        
        # 2. The returned list should have a single figure node with
        #    one image node inside. Add the lazy attribute:
        if figure_nodes and isinstance(figure_nodes[0], nodes.figure):
            fig = figure_nodes[0]
            if len(fig) > 0 and isinstance(fig[0], nodes.image):
                fig[0]['loading'] = 'lazy'
        
        return figure_nodes

def setup(app):
    app.add_directive("lazyfigure", LazyFigureDirective)
    return {
        "version": "1.0",
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
