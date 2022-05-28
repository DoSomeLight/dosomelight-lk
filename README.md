# <div style='font-size:32px' align="center">dosomelight-lk</div>

```bash
git submodule add git@github.com:DoSomeLight/vars-ts.git src/app/vars-ts
```

---
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
.
---


[<div align="right">читать на русском</div>](./README.RU.md)

It's a web application providing access to personal account for users.
\
`"lk"` in the name of repo literally means "personal account" (`l`ichniy `k`abinet - russian word using english letters)

## Table of contents

- [How to develop](#how-to-develop)
     - [1. Fork project](#1-fork-project)
          - [Why do I need to take this step?](#why-do-i-need-to-take-this-step)
     - [2. Clone project](#2-clone-project)
     - [3. Add submodule var-ts](#3-add-submodule-vars-ts)
     - [Notice💡: if using <img style="height:22px;vertical-align:middle" src="./docs/svg/yarn.svg">](#notice💡-if-using-yarn)
     - [How to run & debug 👩‍💻](#how-to-run--debug-👩‍💻)
- [Project structure](./docs/project-structure.md)
- [Supported smart devices](#supported-smart-devices)
- [About project](#about-project)

<!-- TODO - [Residential use (personal)](#residential-use-personal) -->

## How to develop

### 1. Fork project

Take the first step: fork project!
\
Press button **Fork** and then you'll be in your own copy of dosomelight-lk repo

![fork-img](/docs/img/fork.png)

#### [Why do I need to take this step?]()

### 2. Clone project

Clone your forked variant. For example how it looks for me:

<div align="center">

![clone-img](/docs/img/clone-img.png)

</div>

```bash
# <YOUR-USERNAME> must be replaced with yours
git clone git@github.com:<YOUR-USERNAME>/dosomelight-lk.git

# For example how it looks to me:
git clone git@github.com:yorkblansh/dosomelight-lk.git # <<- DO NOT USE THIS ONE, IT IS ONLY EXAMPLE!!
```

### 3. Add submodule vars-ts

```bash
# after you have your project cloned, go to it's folder:
cd dosomelight-lk
# then add submodule:
git submodule add git@github.com:DoSomeLight/vars-ts.git src/APP/vars-ts
```

> [vars-ts](https://github.com/DoSomeLight/vars-ts) contains variables without which it will be impossible to start or debug the project

### 4. Install dependencies

```bash
npm install
```

## Notice💡: if using yarn

```bash
# ⚠️ here is using yarn3 and folder 📂'node_modules' is never created
# see more at https://yarnpkg.com/features/pnp
# if ready - do this to install dependencies:
yarn install
```

## How to run & debug 👩‍💻

```bash
# if npm:
npm start # <- to run app in developer mode
npm build # <- to build static (production mode)

# if yarn:
yarn start # dev mode
yarn build # prod mode

yarn run clear # <- to clear all dependencies (lock files, node_modules)
```

<!-- TODO ### Residential use (personal) -->

## About project

### What the project was made for

Me and other members of project **_dosomelight_** decided to create brand new one tool that will be able to simplify our everyday life, automate routine.

We figured that it'll be cool to make app which can help us to solve this.

## Supported smart devices

- relay
- two-channel thermostat
