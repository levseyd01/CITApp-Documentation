

# Add New User


The ``Add New User`` button opens up a form that allows you to create a new user with four pieces of info:

- Name
- Email
- Last Name
- Permissions


**Other Notes:**

- The ``Add New User`` button is present throughout the app.
- There are many variations to the name of the button and the exact process, but they are largely the same.
- The largest difference being each different variation has different permissions to choose from upon sign up.


## "Add New User" Variations


All variations of the ``Add New User`` button:

- ``+ New User``
- ``+ New Staff``



(add-new-staff-button)=
###  Add New Staff


The ``Add New Staff`` button allows you create a new staff member with specific permissions related to their role in your company. 


#### Where is ``Add New Staff`` Used?


**Verbatim:**

- ``userSectionEndToEndFlow``
    - **variation:** `+ New Staff`


#### Add New Staff: User Permissions


There a few ways to set your permissions for new staff members, here are a few:

1. Place the array directly into the function call.
2. Assign the array to a variable, then pass the variable into the function.

Or

3. Set ``User Permissions`` equal to a specific value depending on the role of the new staff member. 


The ``User Permissions`` array can be found in `cit-app-config.ts` file. 



:::{admonition} Config File Location
:class: seealso

The source code for user permissions can be found in the [cit-app-config.ts file](#cit-app-config).



```typescript
// Use the actual array from config (not just a string):
userPermissionPool = userPermissions.Staff.newStaff,
```
:::