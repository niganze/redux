import React from 'react'
import './Dashboard.css'
import { BarChart, Bar, Cell, XAxis, YAxis,  ComposedChart,
  Line,
 
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer, } from 'recharts';
import './Dashboard.css'
import {FcBusinessContact} from 'react-icons/fc'
import {GiProgression} from 'react-icons/gi'
import {FcComments} from 'react-icons/fc'
import {FcCustomerSupport} from 'react-icons/fc'

import {FcCollect} from 'react-icons/fc'
import { FcLike } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";

function DashboardHome({AllBlogs}) {
  const demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  
    return (
      <div>
        <div className="try">
       <div className="semiheader">
          <div className="simiheader1">
            <h3> Admin Dashboard</h3>
          </div>
          <div className="report">
            <button>Download the report</button>
          </div>
         </div>
  
         <div className="dashboardcards">
          <div className="cards">
            <div className='cardbi'>
              <FcBusinessContact/>
              <p>+30%</p>
              <span>people <FcCustomerSupport/> </span>
              </div>
              <div className='circle'>
                <GiProgression/>
                <p>+16%</p>
                <span>level</span>
                </div>
          </div>
          <div className="cards">
          <div className='cardbi'>
              <FcBusinessContact/>
              <p>30%</p>
              <span>post traing </span>
              </div>
              <div className='circle'>
                <GiProgression/>
                <p>+20%</p>
                <span>level</span>
                </div>
          </div>
          <div className="cards">
          <div className='cardbi'>
              <FcBusinessContact/>
              <p>89%</p>
              <span>Likes <FcLike/> </span>
              </div>
              <div className='circle'>
                <GiProgression/>
                <p>+16%</p>
                <span>level</span>
                </div>
          </div>
          <div className="cards">
          <div className='cardbi'>
              <FcBusinessContact/>
              <p>30%</p>
              <span>all blog </span>
              </div>
              <div className='circle'>
                <GiProgression/>
                <p>+16% <FcPositiveDynamic/></p>
                <span>level</span>
                </div>
          </div>
  
         </div>
       
          <div className="bigcards">
            <div className="semicard">
            <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
            </div>
            <div className="smallestcards">
            <BarChart
      width={500}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        
      </div>
      </div>
  
  
      <div className="cardsy">
        <div className="alain">
           +30 clients
            <FcCollect/>
          
        
        </div>
        <div className="alain">
          +23 comment
          <FcComments/>
        </div>
        <div className="alain">
          +56 posts
        <FcCustomerSupport/>
        </div>
      </div> 
      </div>
      </div>
    )
}
export default DashboardHome