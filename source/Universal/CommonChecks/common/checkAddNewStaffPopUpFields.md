
# checkAddNewStaffPopupFields


This function is meant to check the fields that appear in the "Add New Staff" window that pops up when adding a new staff member through User -> Staff.


Here is what the window looks like:



```{image} ../../../_static/solo_app/Universal/CommonChecks/Common/add_new_staff_popup_window.jpg
```


```typescript
export async function checkAddNewStaffPopupFields(page: Page): Promise<void> {
  // 1) The heading "Add New Staff"
  await expect(page.getByRole('heading', { name: 'Add New Staff' })).toBeVisible();
  await page.getByRole('heading', { name: 'Add New Staff' }).click();

  // 2) The text "EmailFirst NameLast"
  await expect(page.getByText('EmailFirst NameLast')).toBeVisible();
  await page.getByText('EmailFirst NameLast').click();

  // 7) The text "First Name"
  await expect(page.getByText('First Name')).toBeVisible();
  await page.getByText('First Name').click();

  // 8) The label "First Name"
  await expect(page.getByLabel('First Name')).toBeVisible();
  await page.getByLabel('First Name').click();

  // 12) The text "Last Name"
  await expect(page.getByText('Last Name')).toBeVisible();
  await page.getByText('Last Name').click();

  // 14) The heading "Permissions"
  await expect(page.getByRole('heading', { name: 'Permissions' })).toBeVisible();
  await page.getByRole('heading', { name: 'Permissions' }).click();

  // 15) The text "Account Manage Community"
  await expect(page.getByText('Account Manage Community')).toBeVisible();
  await page.getByText('Account Manage Community').click();

  // 16) "Add New Staff" label with text "Account"
  //    We’re scoping to “Add New Staff”, then getByText("Account").
  await expect(page.getByLabel('Add New Staff').getByText('Account')).toBeVisible();
  await page.getByLabel('Add New Staff').getByText('Account').click();

  // 17) The #mat-mdc-checkbox-10 div with text "Manage Community"
  await expect(page.locator('#mat-mdc-checkbox-10 div').filter({ hasText: 'Manage Community' })).toBeVisible();
  await page.locator('#mat-mdc-checkbox-10 div').filter({ hasText: 'Manage Community' }).click();

  // 18) Again text "Account Manage Community"
  await expect(page.getByText('Account Manage Community')).toBeVisible();
  await page.getByText('Account Manage Community').click();

  // 19) Lastly "EmailFirst NameLast" again
  await expect(page.getByText('EmailFirst NameLast')).toBeVisible();
  await page.getByText('EmailFirst NameLast').click();
}
```