### Getting Started with Redux

[Link for the slides](https://goo.gl/Jd7G6Z)

[Link for the codeshare](https://codeshare.io/EpTxA)


To get stated with this repo: run `npm start`

Once your app is up and running, please open your console in the browser:

We will be working inside `index.js`

- install redux with npm: `npm i redux -S`

- import `createStore` from `redux`

- create a reducer called `changeCategories`: `function` that takes a `state` and an `action` properties
  ```javascript
    function changeCategories(state, action) {
      // Here  you will check which action should be executed
      return state;
  }
  ```

  - `action` should always contain a property `type`
  ```javascript
    const action = { type: 'CHANGE_CATEGORIES', payload: {} }
  ```
  - The payload is optional

- create a `store` with `createStore` by passing the reducer `changeCategories`

- Log the store in your console and investigate the options: there are 3 functions that are interesting for us
 - `getState`
 - `dispatch`
 - `subscribe`

- Now let's dispatch a simple action as you would do in any JavaScript apps:
  ```javascript
    const action = { type: 'CHANGE_CATEGORIES', payload: {} };
    store.dispath(action);
  ```
- Subscribe to the store and display the current state with `store.getState()`
```javascript
  store.subscribe(() => console.log('current state: ', store.getState()));
```

### Let's go deeper: Let's the Hack begin

Now you'll have to discover more about Redux by yourself for 20 minutes

Here are few pointers:
- Add more reducers
- Add more actions and action creator
- What is a middleware? (logger, thunk, promise)


### Redux with React

If you feel at ease with Redux, the next step is to integrate that use it in an application:

To get started, switch to this branch (`intermediary-redux`)
 - `git checkout intermediary-redux`
 - then run `npm start`

Your application should up and running.

Let's hack continue!! :)

Happy Coding!

**[Hackages Team](http://hackages.io)**

# Note
This project is using `custom-react-scripts` instead of `react-scripts` to add support for decorators.
