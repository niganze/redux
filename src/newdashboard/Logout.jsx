import './Dashboard.css'
import { Link } from 'react-router-dom';
function IndexPage({blogs}) {
  return (
    <>
   
    {
       blogs.map((item) =>{
        return(
        <div className="post">
          <div className="image">
          <img src={item.image} alt =""/></div>
          <div className="text">
            <h2>{item.title}</h2>
            <p className="info">
            <a className="">{item.author}</a>
            <time>{item.time}</time></p>
           <p className='summary'>{item.description.slice(0,200)}</p>
           <buttom className="buttom"><Link to={`${item._id}`}style={{color: 'inherit', textDecoration: 'inherit'}}>READMORE</Link></buttom>
          </div>
         
        </div>
        )
       } )  
    } 
  </>
  )
  }
export default IndexPage