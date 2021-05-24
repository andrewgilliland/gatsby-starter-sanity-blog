<h1 align="center">
  Gatsby Starter Sanity Blog with TailwindCSS
</h1>

## 🚀 Quick Start

1.  **Clone this repo.**

`git clone repo-name project-name`

2.  **Npm install**

`npm install`

3.  **Create new Sanity project**

`sanity init`

`cd project-name`

`sanity start`

4. **Create .env file**

Create a .env at the root of your GatsbyJS project. 
In this file you will have to add the following variables:

```
GATSBY_SANITY_PROJECT_ID=""
GATSBY_SANITY_DATASET=""
```

The value for GATSBY_SANITY_PROJECT_ID will be found at [manage.sanity.io](https://manage.sanity.io/) when you select the newly created project.

The value for GATSBY_SANITY_DATASET will equal `production` if you started with the default. If you have a different dataset you would like to use, select the dataset tab under the project to view the names of all datasets for reference.

5.  **Deploy Sanity GraphQL API**

Then you will need to deploy a GraphQL API.

`sanity graphgl deploy [dataset-name]`

5.  **Gatsby Develop**
