
import './App.css';
import React from 'react';
import GetData from './components/child';
import Parent from './components/parent';
import useCustom from './components/Custom';

function App() {
  let Home = () => {
    let { data } = useCustom("https://jsonplaceholder.typicode.com/todos");
    console.log(data);
    return (<>
      {data.map((item) => {
        return (<>
          <p>userID: {item.userId},
            id: {item.id},
            title: {item.title} ,
            completed: {item.completed}
          </p>
        </>)
      }
      )}
    </>)
 }
  return (
    <>
      {/* <Parent/> */}
      <Home />
    </>
  );
};



export default App;
