# _ext/tilde_plugin.py
from markdown_it import MarkdownIt
from markdown_it.token import Token

def tilde_rule(state, silent):
    """
    Match ~text~ at the current position, turning it into
    <span class="page-reference">text</span>.
    """
    # 1) Check if we actually have a '~' at the current position
    if state.src[state.pos] != '~':
        return False

    # 2) Search for the closing '~'
    max_pos = state.posMax
    pos = state.pos + 1
    while pos < max_pos:
        if state.src[pos] == '~':
            # Found the closing tilde
            content = state.src[state.pos + 1 : pos]

            # Push an "open" token
            token_open = state.push("tilde_open", "span", 1)
            token_open.attrs = {"class": "page-reference"}
            token_open.markup = "~"
            token_open.block = False

            # Push the text token
            token_text = state.push("text", "", 0)
            token_text.content = content

            # Push a "close" token
            token_close = state.push("tilde_close", "span", -1)
            token_close.markup = "~"
            token_close.block = False

            # Advance the parser position past the closing tilde
            state.pos = pos + 1
            return True
        pos += 1

    return False  # If we never found a matching '~', no match.


def tilde_plugin(md):
    """
    Register our custom rule to run just before the built-in 'emphasis' rule.
    (So we don't conflict with other inline parsing.)
    """
    md.inline.ruler.before("emphasis", "tilde", tilde_rule)
