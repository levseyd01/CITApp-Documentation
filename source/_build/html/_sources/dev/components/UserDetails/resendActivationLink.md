
(resend-activation-link)=
# resendActivationLink()


This function can be used whenever a ``Resend Acitvation Link`` button is needed. 

![alt text](../../../_static/dev/Components/UserDetails/resendActivationLink.png)




```python
export async function resendActivationLink(page: Page): Promise<void> {
  // 1) Click "Resend Activation Link" button

  await expect(page.getByRole('tab', { name: 'User Information' })).toBeVisible();
  await page.getByRole('tab', { name: 'User Information' }).locator('span').nth(1).click();

  await page.getByRole('button', { name: 'Resend Activation Link' }).click();
  // 2) Check & click "Confirmation" heading
  await expect(page.getByRole('heading', { name: 'Confirmation' })).toBeVisible();
  await page.getByRole('heading', { name: 'Confirmation' }).click();
  // 3) Check & click the text "You are about to resend the"
  await expect(page.getByText('You are about to resend the')).toBeVisible();
  await page.getByText('You are about to resend the').click();
  // 4) Click "CancelOK" text
  await page.getByText('CancelOK').click();
  // 5) Click "Resend Activation Link" button again
  await page.getByRole('button', { name: 'Resend Activation Link' }).click();
  // 6) Click "Cancel" button
  await page.getByRole('button', { name: 'Cancel' }).click();
  // 7) Click "Resend Activation Link" once more
  await page.getByRole('button', { name: 'Resend Activation Link' }).click();
  // 8) Check & click "Confirmation" heading again
  await expect(page.getByRole('heading', { name: 'Confirmation' })).toBeVisible();
  await page.getByRole('heading', { name: 'Confirmation' }).click();
  // 9) Check & click "You are about to resend the" again
  await expect(page.getByText('You are about to resend the')).toBeVisible();
  await page.getByText('You are about to resend the').click();
  // 10) Finally click the "OK" button
  await page.getByRole('button', { name: 'OK' }).click();
}
```