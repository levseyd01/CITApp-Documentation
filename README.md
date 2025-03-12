# CIT Services Documentation on Azure Static Web Apps

This repository is configured to host Sphinx documentation using Azure Static Web Apps, providing both public and private documentation capabilities with authentication controls.

## Setup Instructions

### 1. Set up Azure Static Web App

1. Go to the [Azure Portal](https://portal.azure.com)
2. Search for "Static Web Apps" and select it
3. Click "Create" to create a new Static Web App
4. Fill in the basics:
   - Subscription: Select your subscription
   - Resource Group: Create new or select existing
   - Name: Give your app a name (e.g., "cit-services-docs")
   - Region: Select the region closest to your users
   - SKU: Free

5. For the deployment details:
   - Source: GitHub
   - Organization: Your GitHub organization
   - Repository: This repository
   - Branch: main (or your default branch)

6. For the build details:
   - Build Preset: Custom
   - App location: "build/html"
   - API location: ""
   - App artifact location: ""
   - Routes location: "/"

7. Click "Review + create" and then "Create"

### 2. Configure GitHub Actions

This repository already includes a GitHub Actions workflow file (`.github/workflows/azure-static-web-app.yml`) which will build your Sphinx documentation and deploy it to Azure Static Web Apps.

After setting up your Azure Static Web App, GitHub will automatically create a workflow file with your app's deployment token. You should:

1. Compare the auto-generated workflow file with our existing one
2. Copy the `azure_static_web_apps_api_token` value from the auto-generated file to our file
3. Delete the auto-generated file

### 3. Authentication and Authorization

The `routes.json` file configures how authentication and authorization work:

- By default, the root route (`/`) is accessible to anonymous users
- `/authenticated/*` routes require any authenticated user
- `/reader_role/*` routes require users with the "reader" or "contributor" role

To manage users and roles:
1. In the Azure Portal, go to your Static Web App
2. Select "Role management" in the left menu
3. Add users by their email and assign roles

### 4. Building Documentation Locally

To build the documentation locally:

```bash
# Install dependencies
pip install -r requirements.txt

# Build HTML
sphinx-build -b html source build/html

# Optionally serve locally
cd build/html
python -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

### 5. Customizing Routes and Access Control

To modify access control, edit the `routes.json` file. For example, to make all routes require authentication:

```json
{
    "routes": [
        {
            "route": "/*",
            "allowedRoles": ["authenticated"]
        }
    ]
}
```

See the [Azure Static Web Apps documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/routes) for more details on routing configuration.
