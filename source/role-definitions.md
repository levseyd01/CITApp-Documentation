# Role Definitions and Examples

This page provides examples of all the available roles that can be used in the documentation. These roles help maintain consistent styling and enhance accessibility throughout the documentation.

## Basic Text Roles

### Page Role

The page role is used to reference pages:

```markdown
{page}`My Accounts Page`
```

Renders as: {page}`My Accounts Page`

### Section and Subsection Roles

These roles help reference different levels of content:

```markdown
{section}`Main Section`
```

Renders as: {section}`Main Section`

```markdown
{subsection}`Sub Section`
```

Renders as: {subsection}`Sub Section`

### Tab Role

Used to reference tabs in the application:

```markdown
{tab}`Settings Tab`
```

Renders as: {tab}`Settings Tab`

### Table and Column Roles

Used for referencing tables and columns:

```markdown
{table}`User Table`
```

Renders as: {table}`User Table`

```markdown
{column}`Username Column`
```

Renders as: {column}`Username Column`

## UI Element Roles

### Item Role

Used for general UI elements:

```markdown
{item}`Button` {item}`Checkbox` {item}`Dropdown`
```

Renders as: {item}`Button` {item}`Checkbox` {item}`Dropdown`

### Action Role

Used for user actions:

```markdown
{action}`Click` {action}`Drag` {action}`Submit`
```

Renders as: {action}`Click` {action}`Drag` {action}`Submit`

### Code Role

Used for inline code:

```markdown
{code}`function()` {code}`variable` {code}`if statement`
```

Renders as: {code}`function()` {code}`variable` {code}`if statement`

## Color-Specific Item Roles

These roles provide colored styling for UI elements:

```markdown
{item-blue}`Blue Item`
```

Renders as: {item-blue}`Blue Item`

```markdown
{item-cyan}`Cyan Item`
```

Renders as: {item-cyan}`Cyan Item`

```markdown
{item-green}`Green Item`
```

Renders as: {item-green}`Green Item`

```markdown
{item-orange}`Orange Item`
```

Renders as: {item-orange}`Orange Item`

```markdown
{item-deepblue}`Deep Blue Item`
```

Renders as: {item-deepblue}`Deep Blue Item`

```markdown
{item-teal}`Teal Item`
```

Renders as: {item-teal}`Teal Item`

```markdown
{item-red}`Required Field`
```

Renders as: {item-red}`Required Field`

## Special Formatting Roles

### Small Icon Role

Used for displaying icons in a smaller size:

```markdown
{smallicon}`Icon`
```

Renders as: {smallicon}`Icon`

### Red Role

Used to emphasize text in red:

```markdown
{red}`Important Note`
```

Renders as: {red}`Important Note`

### Tippy Reference Role

Creates a reference with a tooltip:

```markdown
{tippy-ref}`Tooltip Reference <#tooltip-example>`
```

Renders as: {tippy-ref}`Tooltip Reference <#tooltip-example>`

## Category Roles

These roles match the navigation structure in the application and include the corresponding Material Icons.

### Application-Specific Category Roles

```markdown
{my-accounts-category}`My Accounts`
```

Renders as: {my-accounts-category}`My Accounts`

```markdown
{dashboard-category}`Dashboard`
```

Renders as: {dashboard-category}`Dashboard`

```markdown
{profile-category}`Profile`
```

Renders as: {profile-category}`Profile`

```markdown
{user-category}`User`
```

Renders as: {user-category}`User`

```markdown
{account-category}`Account`
```

Renders as: {account-category}`Account`

```markdown
{document-category}`Document`
```

Renders as: {document-category}`Document`

```markdown
{offering-category}`Offering`
```

Renders as: {offering-category}`Offering`

```markdown
{setting-category}`Setting`
```

Renders as: {setting-category}`Setting`

## Usage in Documentation

When writing documentation, use these roles to maintain consistency and improve clarity. For example:

```markdown
1. Navigate to the {my-accounts-category}`My Accounts` section.
2. Click the {item}`Save` button.
3. Fill in the {column}`Name` field.
```

This will ensure that UI elements are consistently styled and easily recognizable throughout the documentation.

## MyST-Parser Admonitions Example

MyST-Parser also supports admonitions. Here are some examples:

```python
# Note example
# The actual rendered version will show a styled note box with this text
This is a note admonition.
```

```python
# Warning example
# The actual rendered version will show a styled warning box with this text
This is a warning admonition.
```

```python
# Danger example
# The actual rendered version will show a styled danger box with this text
This is a danger admonition.
```

```python
# Tip example
# The actual rendered version will show a styled tip box with this text
This is a tip admonition.
```

## Tabbed Content Example

MyST-Parser supports tabbed content:

```python
# Tab-set example
# The actual rendered version will show a tabbed interface with three tabs
# Tab 1: Content for tab 1
# Tab 2: Content for tab 2
# Tab 3: Content for tab 3
