---
Layout: Post
Date: 2018-05-
Title:"Reactjs Components"
Categories:
---

# React components
 Before we dive in on the React life cycle hooks I would like to step back a little touch on
 react components.

 As you might notice components in are the core of react everything should be in their own components,
 
 for example a nav bar,wells,panels,input fields etc... I guess this is helpful because you can re-use those componets.
 
 There are basically two ways to create a react component there is the functional way that goes

 ```
const example = function(){
return <h1 hi iam the stateless component/>
}
```
The other way to define a component is with the Es6 class syntax like this.
```
class Stateful extends React.Component{
constructor(){
super();
this.state={
kind:I am the stateful component
}
render(){
return <h1 {this.state.kind}/>
```
This class function has access to features that I will be talking about..React LifeCycle hooks.

# React Life cycle hooks
In short LifeCycle hooks are methods that perform a  specific task at specific point of the component's lifecycl,

this can be when the component is rendered,after or even before the components gets rendered.

Here are some of them.

 - componentDidMount()
 - componentWillMount()
 - componentWillUnMount()
 - componentWillRecieveProps()
 - componentWillUpdate()
 - componentDidUpdate()
 - componentWillUnMount()

Click here **[react](https://reactjs.org/docs/react-component.html)** to read more about how they work and how they can be used.

 I believe  its a quite useful to know how the react component LifeCycle goes, and what happens when the component gets created and  inserted into the DOM,

 I say this because I had problems when working with react where I wanted a certain

 function to fire on immediately when the app opens up,

 in HTML i would have used the body.Onload() to help

 me archive this.

 So in react that's where we use componentWillMount() / componentDidMount().
