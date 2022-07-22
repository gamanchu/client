```js
const [users] = useListen('users');

useEffect(() => {
console.log(users);
}, [users]);
```