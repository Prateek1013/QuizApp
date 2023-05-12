import {Card, Space} from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = (props) => {
  const {Data}=props;
  const navigate=useNavigate();

  const ClickHandler = (QuizNumber)=> {
    navigate(`/quiz/${QuizNumber}`);
  }
  return ( 
        <div>
        <h1 >Quiz App</h1>
    <Space direction="horizontal" size={10}>
    {
      Data.map(item => (
        <Card title={`Quiz ${item.id}`} bordered={false} style={{ width: 300, backgroundImage: 'linear-gradient(95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64%)'
        }}
        >

        <p>{`${item.description}`}</p><br /> <br />
        <button id='next-button' onClick={() => ClickHandler(item.id)
             } >Attempt</button>
      </Card>
      ))
    }
      </Space>
    </div>   
    );
}
 
export default Dashboard;