
# Staff 


You can find the **Manage Staff** section along the left-hand side of the page:

```{lazyfigure} ../../_static/solo_app/User/Staff/manage-staff-location.webp
:width: 50%
:align: center
:name: manage-staff-location
```

:::{admonition} Playwright: Function to Help Navigate Dropdowns
:class: seealso, dropdown
See {ref}`How to navigate the sidenav with Playwright <source-code-click-dropdown-from-side-bar>`
:::





:::{admonition} Mavigating the Page
:class: Note, dropdown
:collapsible: closed


:::{card}


```{include} ../../QuickTips/TogglePrimarySidebar.md
```

:::
:::::



> You should see the homepage for **Managing Staff** accounts:


```{lazyfigure} ../../_static/solo_app/User/Staff/staff-homepage.webp
:width: 100%
:align: center
:name: staff-homepage
```



## Available Information for Staff


The homepage for **Managing Staff** accounts includes a table of accounts with the following columns:

- Contact Name
- Contact Email
- Number of Visits
- Last Logged In
- Status
- Action


```{lazyfigure} ../../_static/solo_app/User/Staff/staff-homepage-columns.webp
:width: 100%
:align: center
:name: staff-homepage-columns
```

## Adding New Staff Members

(new-staff-member-required-info)=
The ``Staff`` section allows the user to create a ``New Staff Member``. To do so, the user will need the following: 

- Email
- First Name
- Last Name
- Permissions




:::{admonition} Playwright: Add New Staff Button
:class: seealso, dropdown
See also the {ref}`add-new-staff-button <add-new-staff-button>`
:::




#### Optional

Setting permissions is optional, just know the default opton


## Status Column


The **Status** column indicates the current status of the account. The following statuses are available:

- `Active`
- `Activation Pending`
- `Inactive`
- `Pending Activation (needs precise definition)`
- `Locked Out (needs precise definition)`


```{lazyfigure} ../../_static/solo_app/User/Staff/staff-homepage-columns-status-column.webp
:width: 100%
:align: center
:name: staff-homepage-statuscolumns
```


If the account's status is `Activation Pending`, then the account...


:::{note}

- Find out more about **Activation Pending**

:::

(user-staff-view-user-details)=
## View Staff User's Details


To view a **Staff User's** details:


1. Find the **Action** column.


```{lazyfigure} ../../_static/solo_app/User/Staff/staff-homepage-columns-action-location.webp
:width: 100%
:align: center
:name: staff-user-action-column

User, Staff Homepage, Action Column
```

2. Find the row of the User you want to view.
3. Click the [View More Icon](#view-more-icon)


```{lazyfigure} ../../_static/solo_app/User/Staff/staff-homepage-columns-view-user-details-location.webp
:width: 100%
:align: center
:name: user-staff-view-more-location

User, Staff Homepage, View More Icon Location
```


```{include} ../../Universal/UserDetails/user-details-page.md
```

(user-user-view-user-details-information-pane)=

```{include} ../../Universal/information-pane.md
```

```{include} ../../Universal/UserDetails/view-user-details-accounts-tab.md
```





