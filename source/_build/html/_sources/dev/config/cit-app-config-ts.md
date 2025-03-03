

(cit-app-config)=
# cit-app-config-ts.md


Below is the basic contents as of 02/24/2025. 


```typescript
export const CIT_APP_CONFIG = {
    sponsorOrg: {
        status_options: ['Active', 'Inactive', 'Suspended', 'Terminated', 'Pending'],
        items_per_page: ['10', '25', '50', '100'],
        table_headers: ['ID', 'Sponsor Organization', 'Number of CIT Corporations', 'Website', 'Email', 'Phone', 'Status'],
        address_fields: ['Street Name', 'Suite/Apt Number', 'City', 'State', 'Zip Code'],
        user_permissions: {
            address: ['Address', 'Approve Proof of Address'],
            assessment: ['Assessment Test', 'View Assessment Test Results'],
            billing: ['Billing', 'View Invoice', 'View Payment'],
            cashout: [
                'Cashout',
                'Add/Edit Cashout Questions',
                'Approve/Deny Cashout Request',
                'View Cashout',
                'Edit Cashout Price Per Share'
            ],
            community: ['Community', 'Edit Community Profile'],
            entity: ['Entity', 'Add/Edit Entity'],
            investor: [
                'Investor/Shareholder',
                'Add/Edit Investor',
                'View Investor',
                'Receive Stop Investment and',
                'Receive Reenrollment in',
                'Receive Offering Signed'
            ],
            report: ['Report', 'Run Shareholder List Report'],
            offering: ['Offering', 'Add/Edit Offering'],
            transaction: ['Transaction', 'Add/Edit Directive'],
            user: ['User', 'Edit/Add Community Staff', 'Edit/Add User', 'View Users'],
            document: ['Document'],
            demographic: [
                'Demographic',
                'Add/Edit Demographic Questions',
                'Add/Edit Renew Demographic'
            ]
        }
    }
};



export const userPermissions = {
    Staff: {
      newStaff: [
        // Put your real or desired permissions here, in the same
        // order you used in your long script. You can keep them as
        // strings or objects – whichever suits your usage better.
        'Account',
        'Manage Community',
        'Billing',
        'Add/Edit Invoice',
        'Add/Edit Payment Credit',
        'View Invoice',
        'Apply Payment Credit',
        'View Payment',
        'Community',
        'Add/Edit Community',
        'Document',
        'Approve Entity Offering',
        'Approve Entity Onboarding',
        'Create Entity Year Offering',
        'Upload Entity Offering',
        'View Entity Offering Document',
        'Upload Entity Onboarding',
        'View Entity Onboarding',
        'Entity',
        'Add/Edit Entity',
        'Manage Entity',
        'Investor/Shareholder',
        'View Investor',
        'Add/Edit Investor',
        'Profile',
        'Edit CIT Services Profile',
        'Edit Email Template',
        'Setting',
        'Edit Reminder Setting',
        'User',
        'Edit/Add CIT Service Staff',
        'Edit/Add User',
        'View Users',
        
        // If you have duplicates that you toggle more than once
        // (like "User" or "Community" multiple times), you can
        // decide whether to keep them repeated or handle them
        // in your code logic differently. For illustration, here
        // we’ll keep them, but typically you'd avoid duplicates.
        
        // e.g. toggling same ones again:
        'User',
        'User',
        'Community',
        'Community',
        'Add/Edit Community',
        'Community',
        'Billing',
        'Add/Edit Invoice',
        // etc... (continue as needed)
      ]
    },
    // Other categories/pages can be added here:
    // e.g., Sales: { Dashboard: [...] }
};

export const columnNames = {
    Staff: {
      HomePage: [
        'Contact Name',
        'Contact Email',
        'Number of Visits',
        'Last Logged In',
        'Status',
        'Action'
      ]
    },
    // Other categories/pages can be added here:
    // e.g., Sales: { Dashboard: [...] }
  };

```


:::{admonition} How to add to CITApp configuration
:class: tip

Try to keep the groupings similar. You can also reuse current configurations if they apply, or modify them when you call. 

:::