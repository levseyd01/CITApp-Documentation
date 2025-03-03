

# userSectionEndToEndFlow




```typescript
/**
 * A refactored, dynamic “userSectionEndToEndFlow” function.
 * Compares closely to your old script, but with param defaults and fewer hard-coded strings.
 */
export async function userSectionEndToEndFlow(
  page: Page,
  {
    sideNavParent = 'peopleUser',
    sideNavChild = 'Staff',
    email = 'fakeEmail@fakeemail.com',
    columnHeaderNamesToCheck = columnNames.Staff.HomePage,
    pageSpecificHeading = 'Staff List',
    pageSpecificLocator = 'add New Staff',
    buttonText = 'New Staff',
    firstName = 'FakeTest',
    lastName = 'Fake',
    // Ensure a space between first/last name:
    fullName = `${firstName} ${lastName}`,
    // Use the actual array from config (not just a string):
    userPermissionPool = userPermissions.Staff.newStaff,
    // Ensure a space between name & email (for row matching):
    fullNameAndEmail = `${fullName} ${email}`,
    // Build a RegExp similar to /FakeTest Fake fakeEmail@/ approach:
    clickInRowFullNameAndEmail = new RegExp(`${fullName} ${email}`)
  }: IUserSectionFlowOptions = {}
): Promise<void> {

  console.log('[userSectionEndToEndFlow] Entering userSectionEndToEndFlow');

  // 1) Toggle the User section multiple times
  console.log(`[userSectionEndToEndFlow] Clicking the dropdown for ${sideNavParent}`);
  await clickDropdownFromSideBar(page, sideNavParent, sideNavChild);
  

  // 2) Navigate to the Staff page
  //console.log(`[userSectionEndToEndFlow] Navigating to the ${sideNavChild} page`);
  //await safeClick(page, sideNavChild); // make into wrapper function to make code more readable, i.e., so I can do something like await selectSideNavChild(page, sideNavChild);  - where flllFirstName just uses safeFill inside of it.

  // 3) Check column headers on Staff page
  console.log(`[userSectionEndToEndFlow] Checking ${columnHeaderNamesToCheck} column headers`);
  await checkColumnHeaders(page, columnHeaderNamesToCheck);
  console.log(`[userSectionEndToEndFlow] Checking all fields on the "${pageSpecificHeading}" page`);

  // 4) Check page-specific fields (e.g. “Staff List” -> “add New Staff”)
  await checkPageSpecificFields(page, pageSpecificHeading, pageSpecificLocator);

  // 5) Click "+ New Staff" to open popup
  console.log(`[userSectionEndToEndFlow] Clicking "${buttonText}" and opening new user popup`);
  await safeClick(page, buttonText); // another wrapper - make into function clickAddNewStaffButton(page, buttonText) --> passes to safeClick

  // 6) Fill basic user fields
  console.log(`[userSectionEndToEndFlow] Filling email '${email}' for: ${firstName} ${lastName}`);
  await safeFill(page, 'Email', email); // make into wrapper function to make code more readable, i.e., so I can do something like await fillFirstName(page, lastName);  - where flllFirstName just uses safeFill inside of it. 
  await page.getByLabel('Email', { exact: true }).press('Tab');  // create function for this so that i can do something like pressTab(page, "First Name")

  await safeFill(page, 'First Name', firstName); // make into wrapper function to make code more readable, i.e., so I can do something like await fillFirstName(page, lastName);  - where flllFirstName just uses safeFill inside of it. 
  await page.getByLabel('First Name', { exact: true }).press('Tab'); // make into function

  await safeFill(page, 'Last Name', lastName); // make into wrapper function to make code more readable, i.e., so I can do something like await fillLastName(page, lastName);  - where flllLastName just uses safeFill inside of it. 

  // 7) Verify that the popup fields are correct
  console.log(`[userSectionEndToEndFlow](checkAddNewStaffPopupFields) Verifying "${pageSpecificLocator}" popup fields`);
  await checkAddNewStaffPopupFields(page);

  // 8) Select staff permissions (partial: first 5)
  console.log('[userSectionEndToEndFlow](editUserPermissions) Selecting partial staff permissions (first 5)');
  const partialPermissions = userPermissionPool.slice(0, 5);
  await editUserPermissions(page, email, partialPermissions); // make these lines (692-694) into a function known as editUserPermissions_Partial(page, email, max_number_of_permissions ) - this should be a wrapper, using an variable in place of the number where the suer can select 1-=10 for the thirsd slogt. it should include the logging and deifning of partial permisisons like it has here. 

  await page.waitForTimeout(1000);

  // 10) Verify that the new user appears with status "Activation Pending".
  console.log('[userSectionEndToEndFlow] Verifying new user row and "Activation Pending" status');
  await safeClick(page, fullName); 
  await page.waitForTimeout(1000); // refactor (inlcude lines 698-701) into "confgi"

  // Click "Edit Permissions" button in that row
  const EditUserPermissionsButton = 'Activation Pending'
  console.log('[userSectionEndToEndFlow](selectActionFromRow) Selecting Action: "Edit Permissions" in row with $(clickInRowFullNameAndEmail)'); // check syntax
  await selectActionFromRow(page, clickInRowFullNameAndEmail, 1, EditUserPermissionsButton); 
  await page.waitForTimeout(1000);

  // 12) Edit user permissions (full set)
  console.log('[userSectionEndToEndFlow](editUserPermissions)  Editing user permissions (full)');
  await editUserPermissions(page, email, userPermissionPool);
  await page.waitForTimeout(1000);

  // 13) Open user details and check fields
  console.log('[userSectionEndToEndFlow] Opening user details and verifying fields');
  await safeClick(page, fullName); // make into wrapper so that i can do something like openUserDetails(page, fullName); which includes the console.log with a $(fullName) message, and witha  waitForTimeout.
  await page.waitForTimeout(3000);

  // Possibly opens the user's row or something else
  await selectActionFromRow(page, clickInRowFullNameAndEmail, 3); // this should be able to use the same function as from above. 
  await page.waitForTimeout(1000);

  await checkUserFields(page, fullName);

  // 14) Resend activation link
  console.log('[userSectionEndToEndFlow] Resending activation link');
  await resendActivationLink(page);

  // 15) Reload page, navigate to user list
  console.log('[userSectionEndToEndFlow] Reloading page and navigating to Users list');
  await page.reload({ waitUntil: 'networkidle' });
  await page.goto('https://cit.stockofferingsolutions.com/cit/user/list', { waitUntil: 'networkidle' });
  await setItemsPerPage(page, '100');

  // 16) Search for the new user
  await searchForUser(page, fullName);
  await page.waitForTimeout(3000);
  await getAllCellsFromTable(page);

  // 17) Additional verifications
  const cell = page.locator('tr:nth-child(39) > td:nth-child(3)');
  await expect(cell).toBeVisible();

  // 18) Delete the new user
  console.log('[userSectionEndToEndFlow] Deleting the new user');
  // Old code: go back to Staff
  await safeClick(page, sideNavChild);
  // Select the user row
  await safeClick(page, fullName);

  // Attempt #1
  console.log('[userSectionEndToEndFlow] Deletion Attempt #1');
  await selectActionFromRow(page, clickInRowFullNameAndEmail, 2);
  console.log('waiting for deletion popup');
  await expect(page.getByText('You are about to remove this')).toBeVisible();
  console.log('canceling deletion');
  // Cancel it here (to match old code):
  await cancelButton(page);

  // Attempt #2
  console.log('[userSectionEndToEndFlow] Deletion Attempt #2');
  await selectActionFromRow(page, clickInRowFullNameAndEmail, 2);
  console.log('waiting for deletion popup');
  await expect(page.getByText('You are about to remove this')).toBeVisible();
  console.log('canceling deletion');
  await cancelButton(page);

  // Attempt #3
  console.log('[userSectionEndToEndFlow] Deletion Attempt #3 (Confirm OK)');
  await selectActionFromRow(page, clickInRowFullNameAndEmail, 2);  // 1 = "edit permissions"    2 ="delete",  .first() = "view"   
  console.log('reopening deletion');
  console.log('confirming deletion');
  await okButton(page);

  console.log('[userSectionEndToEndFlow] completed.');
}
```

