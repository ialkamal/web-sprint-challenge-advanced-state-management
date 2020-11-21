1. What problem does the context API help solve?

It helps the problem of prop drilling, making props available in any level of the component hierarchy without the need of passing props from one component level to the next till we reach the one the needs the prop.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- store: is just the global storage for our application state.

- reducers: are functions that modify state by taking in the previous state and an action "such as adding, removing, loading, etc.." and returning a new state.

- actions: are objects sent to the reducers from action creator functions based on some event triggered in our application. An action has two keys, the first is a type which is required. This defines what our app should be doing (e.g. add something, delete something, etc...). The other which is optional is the payload which usually contains the data that is modifying the application in a certain way.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is a global state that is available in all components in our app. Component state is only available in the component itself or its children through props.
   If we state needs to be modified locally within a component, then it's best to use component state (recording user input in a form). On the hand, if we need the state across multiple components and component trees as well as in many levels across our app, then application state makes sense (for example, logged in user details)

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   redux-thunk: is a library that applies middleWare to our redux store intercepting actions and modifying these actions (maybe by pulling data from an API) and then sending it to the reducer. A thunk receives a function (in our case a dispatch) and then returns another modified function (maybe a dispatch inside an axios request).

5. What is your favorite state management system you've learned and this sprint? Please explain why!
   Personally I liked redux a lot. It is clean and clear and provides a simple way to provide application level state all across our app. When we need a state or some action creators, we just hook them up with the component that we need.
   For context api, I found it too simple to be used in complex applications. I even saw a tutorial passing a reducer into the context which is basically what redux does.
