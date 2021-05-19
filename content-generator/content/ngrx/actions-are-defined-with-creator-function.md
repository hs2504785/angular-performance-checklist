---
title: define actions using NgRx creator function, it provides type safty
---

# Problem

When we send an action to the store, we need to send an object that has a type property and optional metadata (often added as a payload property). We could recreate an object every time we want to send that but we would violate the DRY principle.

One of the promises in NgRx is that it provides extreme type safety. This is something that cannot be achieved with plain objects.

# Solution

We want to define our actions as classes. When we use classes to define our actions, we can define them once in a separate file and reuse them everywhere.

Here's an example on how to define an action.

```ts
import { Action } from '@ngrx/store';

export enum AppActionTypes {
  APP_PAGE_LOAD_USERS = '[App Page] Load Users',
  SAVE_USER = '[Login Effect] Save User'
}

import { createAction } from '@ngrx/store';

export const loadUsersAction = createAction(AppActionTypes.APP_PAGE_LOAD_USERS);
export const saveUserAction = createAction(AppActionTypes.SAVE_USER, props<{user: User}>);
```

Now, we can use the `loadUsersAction` action to send this action to the store which is then passed to our reducers.


# Resources

- [Type safe actions](https://ngrx.io/guide/store/actions)
