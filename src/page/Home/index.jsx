import React, { useEffect } from 'react';

const Home = function(props) {
  useEffect(() => {
    if (true) {
      props.history.replace('/login')
    }
  },[])

  return (
    <>
      尽情期待
    </>
  )
}

export default Home