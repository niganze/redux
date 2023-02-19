import { Link } from 'react-router-dom';
function IndexPage({AllBlogs}) {

  return (
    <>
    {
       AllBlogs.map((item) =>{
        return(
        <div className="post">
          <div className="image">
          <img src={item?.image} alt =""/>
          </div>
          <div className="text">
            <h3>{item?.title.slice(0,23)}</h3>
            <p className="info">
            <a className="">
              <p>author:</p>
              {item?.author}</a>
            <time>{item.time}</time></p>
           <p className='summary'>{item?.content.slice(0,200)}</p>
           <buttom className="buttom"><Link to={`${item?._id}`}style={{color: 'inherit', textDecoration: 'inherit'}}>READMORE</Link></buttom>
          </div>
        </div>
        )
       } )  
    } 
  </>
  )
  }
export default IndexPage
