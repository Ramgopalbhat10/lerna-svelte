---
title: 'Creating a Lerna monorepo'
description: 'How to create a Lerna monorepo project with yarn workspaces'
date: "2022-04-28"
heroImageAlt: 'Golang logos'
thumbnailImageAlt: 'Golang logos'
categories: 
	- 'setup'
---

---

## Getting started

To create a `Lerna` project, we need to add it as a dev dependency of our project with `npx`

```bash
mkdir project-name

cd project-name

npx lerna init --independent && yarn
```

---

## Directory structure

With the above commands, `npx` will create the following directory structure.

```
project-name
  |- 📂 node_modules
  |- 📂 packages
  |- 📃 lerna.json
  |- 📃 package.json
  |- 📃 yarn.lock
```

---

## Config changes

To make Lerna work with yarn workspaces, we need to add `useWorkspaces` property in `lerna.json` file and "workspaces" property in the `package.json` file.

```json:lerna.json
{
  "packages": ["packages/*"],
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

```json:package.json
{
  ...
  "workspcaes": {
    "packages": ["packages/**"]
  }
}
```

---

## Create a React project

As the base setup is configured, now we can create any JavaScript/TypeScript project inside the `packages` folder.

```bash
cd packages

yarn create vite learn-react --template react-ts
```

---

## Run the project

To run the projects, we need to add scripts to the `package.json` of the root folder.

```json
{
  ...
  "scripts" : {
    "start:react:dev": "lerna exec --scope @mrgb/learn-react -- yarn dev"
  }
}
```

The `--scope` will tell which project to run, and `-- yarn dev` will run the `dev` script of the target project.
