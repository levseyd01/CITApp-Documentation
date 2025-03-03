
(check-user-fields)=
# checkUserFields.ts

This function can be used anytime there is a ``User Detail`` type of page, like the following:


![alt text](../../../_static/dev/Components/UserDetails/userDetails.png)


```typescript
export async function checkUserFields(
  page: Page, 
  userName: string) {
  //
  // 1) The main area
  console.log('[checkUserFields] Checking user fields - running [expect]');
  //
  //await expect(page.getByText('"User FakeTest Fake (fakeEmail)')).toBeVisible();
  await page.waitForTimeout(2000);
  console.log('[checkUserFields] Checking user fields - running [click]');
  await page.waitForTimeout(2000);
  await expect(page.getByRole('main')).toBeVisible();
  await page.getByRole('main').click();

  // 2) Heading: "User Detail: <userName>"
  //
  console.log('[checkUserFields] Checking user fields - running [expect]');
  await page.waitForTimeout(2000);
  const detailHeading = `User Detail: ${userName}`;
  await page.waitForTimeout(1000);
  console.log('[checkUserFields] Checking user fields - running [click]');
  console.log('[checkUserFields] checking heading:', detailHeading);
  await page.waitForTimeout(1000);
  await expect(page.getByRole('heading', { name: detailHeading })).toBeVisible();
  console.log('[checkUserFields] checking heading:', detailHeading);
  await page.waitForTimeout(1000);
  await page.getByRole('heading', { name: detailHeading }).click();

  //
  // 3) The "User Information" tab => .nth(1) span
  //
  await expect(page.getByRole('tab', { name: 'User Information' })).toBeVisible();
  await page.getByRole('tab', { name: 'User Information' }).locator('span').nth(1).click();

  //
  // 4) The text "User Information"
  //
  await expect(page.getByText('User Information')).toBeVisible();
  await page.getByText('User Information').click();

  //
  // 5) A labeled container for "User Information" with text matching "Pending ActivationFirst"
  //
  //    Codegen used a filter for HasTextRegex = new Regex("^Pending ActivationFirst$")
  //    We’ll do a quick expect + click:

  /*
  const userInfoLabel = page.getByLabel('User Information')
    .locator('div')
    .filter({ hasText: /^Pending ActivationFirst$/ })
    .first();
  await expect(userInfoLabel).toBeVisible();
  await userInfoLabel.click();

  */


  // Try to find either "Pending Activation" or "Pending ActivationFirst" and click it.
  let clickableElement;

  try {
    // Attempt to verify and select "Pending Activation"
    await expect(page.getByText('Pending Activation')).toBeVisible();
    clickableElement = page.getByText('Pending Activation');
    await clickableElement.click();
  } catch (error1) {
  // If "Pending Activation" isn't visible, try "Pending ActivationFirst"
      try {
    await expect(page.getByText('Pending ActivationFirst')).toBeVisible();
    clickableElement = page.getByText('Pending ActivationFirst');
    await clickableElement.click();
    } catch (error2) {
      try {
        
         await expect(page.getByText("Reactivate")).toBeVisible();

         await page.getByText("Reactivate").click();
         await expect(page.getByText("OK")).toBeVisible()

         await page.getByText("OK").click();
        // Neither element is visible; log an error or throw an exception as needed.
       console.error('Neither "Pending Activation" nor "Pending ActivationFirst" is visible.');
        // Optionally, fail the test by rethrowing the error:
        throw error2;
      } catch (error3) {
        console.error('Neither "Pending Activation" nor "Pending ActivationFirst" is visible.');
        // Optionally, fail the test by rethrowing the error:
        throw error3;
      }
  }



    // Click the element that was found.
    await clickableElement.click();
    await page.waitForTimeout(1000);
  



    //
    // 6) "Pending ActivationFirst"
    //
    await expect(page.getByText('Pending ActivationFirst')).toBeVisible();
    await page.getByText('Pending ActivationFirst').click();

    //
    // 7) "First Name"
    //
    await expect(page.getByText('First Name')).toBeVisible();
    await page.getByText('First Name').click();

    //
    // 8) The first .mat-mdc-form-field-infix
    //
    const firstInfix = page.locator('.mat-mdc-form-field-infix').first();
    await expect(firstInfix).toBeVisible();
    await firstInfix.click();

    //
    // 9) The "First Name" label
    //
    await expect(page.getByLabel('First Name')).toBeVisible();
    await page.getByLabel('First Name').click();

    //
    // 10) The first .mat-mdc-form-field-subscript-wrapper
    //
    const firstSubscript = page.locator('.mat-mdc-form-field-subscript-wrapper').first();
    await expect(firstSubscript).toBeVisible();
    await firstSubscript.click();

    //
    // 11) "mat-form-field:nth-child(2)" infix
    //
    const matField2Infix = page.locator(
      'mat-form-field:nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix'
    );
    await expect(matField2Infix).toBeVisible();
    await matField2Infix.click();

    //
    // 12) "Last Name" text
    //
    await expect(page.getByText('Last Name')).toBeVisible();
    await page.getByText('Last Name').click();

    //
    // 13) "Last Name" label
    //
    await expect(page.getByLabel('Last Name')).toBeVisible();
    await page.getByLabel('Last Name').click();

    //
    // 14) "mat-form-field:nth-child(2)" subscript
    //
    const matField2Subscript = page.locator(
      'mat-form-field:nth-child(2) > .mat-mdc-form-field-subscript-wrapper'
    );
    await expect(matField2Subscript).toBeVisible();
    await matField2Subscript.click();

    //
    // 15) "Username (Email)" text
    //
    await expect(page.getByText('Username (Email)')).toBeVisible();
    await page.getByText('Username (Email)').click();

    //
    // 16) The "Username (Email)" label
    //
    await expect(page.getByLabel('Username (Email)')).toBeVisible();
    await page.getByLabel('Username (Email)').click();

    //
    // 17) "mat-form-field:nth-child(3)" infix
    //
    const matField3Infix = page.locator(
      'mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix'
    );
    await expect(matField3Infix).toBeVisible();
    await matField3Infix.click();

    //
    // 18) "mat-form-field:nth-child(3)" subscript
    //


    const matField3Subscript = page.locator(
      'mat-form-field:nth-child(3) > .mat-mdc-form-field-subscript-wrapper'
    );
    await expect(matField3Subscript).toBeVisible();
    await matField3Subscript.click();

    //
    // 19) "First NameLast NameUsername (" text
    //
    //    Codegen references "GetByText("First NameLast NameUsername (")".
    //
    await expect(page.getByText('First NameLast NameUsername (')).toBeVisible();
    await page.getByText('First NameLast NameUsername (').click();

    //
    // 20) "Phone Number" (exact)
    //
    await expect(page.getByText('Phone Number', { exact: true })).toBeVisible();
    await page.getByText('Phone Number', { exact: true }).click();

    //
    // 21) The "Phone Number" label
    //
    await expect(page.getByLabel('Phone Number')).toBeVisible();
    await page.getByLabel('Phone Number').click();

    //
    // 22) "mat-form-field:nth-child(4)" subscript
    //
    const matField4Subscript = page.locator(
      'mat-form-field:nth-child(4) > .mat-mdc-form-field-subscript-wrapper'
    );
    await expect(matField4Subscript).toBeVisible();
    await matField4Subscript.click();

    //
    // 23) "mat-form-field:nth-child(4)" infix
    //
    const matField4Infix = page.locator(
      'mat-form-field:nth-child(4) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix'
    );
    await expect(matField4Infix).toBeVisible();
    await matField4Infix.click();

    //
    // 24) "Two Factor Enable"
    //
    await expect(page.getByText('Two Factor Enable')).toBeVisible();
    await page.getByText('Two Factor Enable').click();

    //
    // 25) "No" exact
    //
    await expect(page.getByText('No', { exact: true })).toBeVisible();
    await page.getByText('No', { exact: true }).click();

    //
    // 26) "First NameLast NameUsername ("
    //
    //    Codegen repeated this text again after the "No" click
    //
    await expect(page.getByText('First NameLast NameUsername (')).toBeVisible();
    await page.getByText('First NameLast NameUsername (').click();

    //
    // 27) "ProfileActivity"
    //
    await expect(page.getByText('ProfileActivity')).toBeVisible();
    await page.getByText('ProfileActivity').click();

    //
    // 28) The heading "Activity"
    //
    await expect(page.getByRole('heading', { name: 'Activity' })).toBeVisible();
    await page.getByRole('heading', { name: 'Activity' }).click();

    //
    // 29) The heading "Profile"
    //
    await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
    await page.getByRole('heading', { name: 'Profile' }).click();

    //
    // 30) The label "User Information" -> <img> inside
    //
    const userInfoImg = page.getByLabel('User Information').getByRole('img');
    await expect(userInfoImg).toBeVisible();
    await userInfoImg.click();

    //
    // 31) "Pending Activation"
    //
    await expect(page.getByText('Pending Activation')).toBeVisible();
    await page.getByText('Pending Activation').click();

    //
    // 32) The "Accounts" tab => .nth(1).click()
    //
    await expect(page.getByRole('tab', { name: 'Accounts' })).toBeVisible();
    await page.getByRole('tab', { name: 'Accounts' }).locator('span').nth(1).click();

    //
    // 33) "Account Name" column
    //
    await expect(page.getByRole('columnheader', { name: 'Account Name' })).toBeVisible();
    await page.getByRole('columnheader', { name: 'Account Name' }).click();

    //
    // 34) "Type" column
    //
    await expect(page.getByRole('columnheader', { name: 'Type' })).toBeVisible();
    await page.getByRole('columnheader', { name: 'Type' }).click();

    //
    // 35) "Email" column
    //
    await expect(page.getByRole('columnheader', { name: 'Email' })).toBeVisible();
    await page.getByRole('columnheader', { name: 'Email' }).click();

    //
    // 36) "Phone" column
    //
    await expect(page.getByRole('columnheader', { name: 'Phone' })).toBeVisible();
    await page.getByRole('columnheader', { name: 'Phone' }).click();

    //
    // 37) "Action" column
    //
    await expect(page.getByRole('columnheader', { name: 'Action' })).toBeVisible();
    await page.getByRole('columnheader', { name: 'Action' }).click();

    //
    // 38) "No accounts"
    //
    await expect(page.getByText('No accounts')).toBeVisible();
    await page.getByText('No accounts').click();

    //
    // 39) "Account Name Type Email Phone Action No accounts"
    //
    await expect(page.getByText('Account Name Type Email Phone Action No accounts')).toBeVisible();
    await page.getByText('Account Name Type Email Phone Action No accounts').click();

    //
    // 40) Finally, the div with text "User InformationAccountsAccount Name..."
    //
    const detailDiv = page.locator('div').filter({
      hasText: 'User InformationAccountsAccount Name Type Email Phone Action No accounts'
    }).nth(2);
    await expect(detailDiv).toBeVisible();
    await detailDiv.click();
  }
}
```