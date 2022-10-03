import React from 'react'
import './Info.css'
import youtube from '../../youtube';
// https://www.youtube.com/watch?v=lF8ohe9Pkn0
function Info() {
  const [data, setData] = React.useState([])
  
  const onSearch = async (keyword) =>{
    const response = await youtube.get('/search',{
      params:{
        q: keyword
      }
    });

    console.log(response.data)
  }

  React.useEffect(()=>{
    onSearch("react");
  }, [data])

  console.log(data);
  return (
    <div className='info'>
      prop
    </div>
  )
}

export default Info
