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
    <Card title={`Quiz ${Data[0].id}`} bordered={false} style={{ width: 300 }}>

        <p>{`${Data[0].description}`}</p><br /> <br />
        <button id='next-button' onClick={() => ClickHandler(Data[0].id)
             } >Attempt</button>
      </Card>
      
      <Card title={`Quiz ${Data[1].id}`} bordered={false} style={{ width: 300 }}>

        <p> {`${Data[1].description}`}</p><br /> <br />
        <button id='next-button' onClick={()=> ClickHandler(Data[1].id)}>Attempt</button>
      </Card>
      <Card title={`Quiz ${Data[2].id}`} bordered={false} style={{ width: 300 }}>

        <p> {`${Data[2].description}`} </p><br /> <br />
        <button id='next-button' onClick={()=> ClickHandler(Data[2].id)}>Attempt</button>
      </Card>
      <Card title={`Quiz ${Data[3].id}`} bordered={false} style={{ width: 240 }}>

        <p> {`${Data[3].description}`}</p><br /> <br />
        <button id='next-button' onClick={()=>ClickHandler(Data[3].id)}>Attempt</button>
      </Card>
      </Space>
    </div>   
    );
}
 
export default Dashboard;