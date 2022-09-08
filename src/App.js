
import './App.css';
import React from 'react';
import GetData from './components/child';
import Parent from './components/parent';
import useCustom from './components/Custom';
import Child1 from './components/child1';
import Parent1 from './components/parent1';

function App() {
  // const Home = () => {
  //   const { data } = useCustom("https://jsonplaceholder.typicode.com/todos");
  //   console.log(data);
  //   return (<>
  //     {data.map((item) => {
  //       return (<>
  //         <p>userID: {item.userId},
  //           id: {item.id},
  //           title: {item.title} ,
  //           completed: {item.completed}
  //         </p>
  //       </>)
  //     }
  //     )}
  //   </>)
//  }
  return (
    <>
      {/* <Parent/> */}
      {/* <Home /> */}
      {/* <Child1/> */}
      <Parent1/>
    </>
  );
};
export default App;