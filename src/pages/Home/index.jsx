import React, { useEffect } from 'react';
const arr = [1,2,3,4,5,6]
const Home = function(props) {

  return (
    <>
      <div key={index} x-for={(item, index) in arr} x-if={true}>
        尽情期待
      </div>
    </>
  )
}

export default Home