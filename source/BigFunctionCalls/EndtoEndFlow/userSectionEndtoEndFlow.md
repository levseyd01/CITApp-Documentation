(user-section-end-to-end-flow)=
# userSectionEndtoEndFlow


This function can be used dynamically to test the entire flow of the ``User`` section (or sections like it) for the CIT App.




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
  await clickDropdownFromSideBar(page, sideNavParent);
  console.log(`[userSectionEndToEndFlow] Toggled the ${sideNavParent} multiple times`);

  // 2) Navigate to the Staff page
  console.log(`[userSectionEndToEndFlow] Navigating to the ${sideNavChild} page`);
  await safeClick(page, sideNavChild);

  // 3) Check column headers on Staff page
  console.log(`[userSectionEndToEndFlow] Checking ${columnHeaderNamesToCheck} column headers`);
  await checkColumnHeaders(page, columnHeaderNamesToCheck);
  console.log(`[userSectionEndToEndFlow] Checking all fields on the "${pageSpecificHeading}" page`);

  // 4) Check page-specific fields (e.g. “Staff List” -> “add New Staff”)
  await checkPageSpecificFields(page, pageSpecificHeading, pageSpecificLocator);

  // 5) Click "+ New Staff" to open popup
  console.log(`[userSectionEndToEndFlow] Clicking "${buttonText}" and opening new user popup`);
  await safeClick(page, buttonText);

  // 6) Fill basic user fields
  console.log(`[userSectionEndToEndFlow] Filling email '${email}' for: ${firstName} ${lastName}`);
  await safeFill(page, 'Email', email);
  await page.getByLabel('Email', { exact: true }).press('Tab');

  await safeFill(page, 'First Name', firstName);
  await page.getByLabel('First Name', { exact: true }).press('Tab');

  await safeFill(page, 'Last Name', lastName);

  // 7) Verify that the popup fields are correct
  console.log(`[userSectionEndToEndFlow] Verifying "${pageSpecificLocator}" popup fields`);
  await checkAddNewStaffPopupFields(page);

  // 8) Select staff permissions (partial: first 5)
  console.log('[userSectionEndToEndFlow] Selecting partial staff permissions (first 5)');
  const partialPermissions = userPermissionPool.slice(0, 5);
  await editUserPermissions(page, email, partialPermissions);

  // 9) Save the new staff
  console.log('[userSectionEndToEndFlow] Saving new staff');
  await saveButton(page); // If this calls safeClick(page, 'Save'), adjust accordingly
  await page.waitForTimeout(1000);

  // 10) Verify that the new user appears with status "Activation Pending".
  console.log('[userSectionEndToEndFlow] Verifying new user row and "Activation Pending" status');
  await safeClick(page, fullName);
  await page.waitForTimeout(1000);

  // Click "Edit Permissions" button in that row
  console.log('[userSectionEndToEndFlow] Clicking "Edit Permissions" button');
  await safeClickInRow(page, clickInRowFullNameAndEmail, 1, 'Activation Pending');
  await page.waitForTimeout(1000);

  // 12) Edit user permissions (full set)
  console.log('[userSectionEndToEndFlow] Editing user permissions (full list)');
  await editUserPermissions(page, email, userPermissionPool);
  await page.waitForTimeout(1000);

  // 13) Open user details and check fields
  console.log('[userSectionEndToEndFlow] Opening user details and verifying fields');
  await safeClick(page, fullName);
  await page.waitForTimeout(3000);

  // Possibly opens the user's row or something else
  await safeClickInRow(page, clickInRowFullNameAndEmail, 2);
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
  await safeClickInRow(page, clickInRowFullNameAndEmail, 2);
  console.log('waiting for deletion popup');
  await expect(page.getByText('You are about to remove this')).toBeVisible();
  console.log('canceling deletion');
  // Cancel it here (to match old code):
  await cancelButton(page);

  // Attempt #2
  console.log('[userSectionEndToEndFlow] Deletion Attempt #2');
  await safeClickInRow(page, clickInRowFullNameAndEmail, 2);
  console.log('waiting for deletion popup');
  await expect(page.getByText('You are about to remove this')).toBeVisible();
  console.log('canceling deletion');
  await cancelButton(page);

  // Attempt #3
  console.log('[userSectionEndToEndFlow] Deletion Attempt #3 (Confirm OK)');
  await safeClickInRow(page, clickInRowFullNameAndEmail, 2);
  console.log('reopening deletion');
  console.log('confirming deletion');
  await okButton(page);

  console.log('[userSectionEndToEndFlow] completed.');
}
```