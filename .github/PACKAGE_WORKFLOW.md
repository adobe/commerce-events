# `commerce-events-*` Package Workflow

Documenting the QA/Prod release cycle for our ` commerce-events-*` open source repositories.

### TODO

-   Use [@changesets/changesets](https://github.com/changesets/changesets) to control versioning.
-   Filter `yarn build:*` script to only build `@adobe/commerce-events-*` and dependencies

## Github Actions (CI/CD) for "QA"

When building a new package for `commerce-events`, and assuming the package `name` in your `package.json`, begins with `@adobe/commerce-events-*`, the [merge-to-main.yml](./workflows/merge-to-main.yml#7) workflow watches any changes that happen in a `packages/commerce-events-*` folder. The workflow will run a `yarn build:qa` for all the packages.

We can simply add our new package workflow by adding the below lines to the end of the yaml file.

```yml
- name: release <package-name>
    working-directory: ./packages/commerce-events-<package-name>
    run: yarn release -- --skip.commit --skip.tag --release-as 0.0.0-${{ github.sha }}

- name: publish <package-name>
    working-directory: ./packages/commerce-events-<package-name>
    run: yarn publish --access public --tag qa
    env:
        NODE_AUTH_TOKEN: ${{ secrets.ADOBE_BOT_NPM_TOKEN }}
```

### - NPM Access

When you create a Pull Request and it is merged into the `main` branch, your package is then built and pushed to [npm](npmjs.com). You can see the piplines running [here](https://github.com/adobe/commerce-events/actions). If you search for your package name, you should see the latest build as version `0.0.0-<github commit hash>` and should also have a qa tag.

### - UNPKG Access

> :memo: The 2.x packages will be located at `/umd/index.js` or `umd.index.js`

[unpkg](https://unpkg.com/) is a fast, global content delivery network for everything on npm. We can access our package by going to the url

-   `https://unpkg.com/@adobe/commerce-events-<package-name>@qa/dist/index.js`

Using the sdk as an example, you should be able to access your file on the cdn in your html like so:

```html
<script async defer src="https://unpkg.com/@adobe/commerce-events-sdk@qa/dist/index.js"></script>
```

## Github Actions (CI/CD) for "Prod"

### TODO

currently we aren't pushing a latest build for `commerce-events-*` packages since we are still on 1.x versions.
