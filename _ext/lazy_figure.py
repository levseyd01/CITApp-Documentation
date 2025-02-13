# lazy_figure.py

from docutils import nodes
from sphinx.transforms import SphinxTransform

class LazyFigureTransform(SphinxTransform):
    default_priority = 800  # run fairly late

    def apply(self):
        # This transform will visit every image node in the document
        for node in self.document.traverse(nodes.image):
            node['loading'] = 'lazy'
            # Optionally: if you only want to do this for "figure" parents,
            # you can check parent type here:
            # if isinstance(node.parent, nodes.figure):
            #     node["loading"] = "lazy"

def setup(app):
    app.add_transform(LazyFigureTransform)
    return {
        'version': '1.0',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
