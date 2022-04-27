import { useState, useEffect, Fragment } from 'react';
import './App.css';
import { Bar } from './components/Bar';
import { Line } from './components/Line';
import { Pie } from './components/Pie';

function App() {
  const [ data, setData ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  
  const fetchData = async () => {
    fetch('https://wai-ethiopia.akvotest.org/api/form/494780323')
      .then(res => res.json())
      .then((value) => {
          setData(value)
          setLoading(false)
      })
  }
  
  useEffect(() => {
      fetchData()
  }, [])
  
  return (
    <div className="bar_chart_wrapper">
      {loading 
        ? <h1 style={{ textAlign: "center"}}>Loading...</h1>
        : <Fragment>
          <h1 style={{ textAlign: "center" }}>Question charts</h1>
          <Bar data={data} />
          <div style={{ display: "flex", gap: "10%", flexWrap: "wrap" }}>
            <Pie data={data} />
            <Line data={data} />
          </div>
        </Fragment>
      }
    </div>
  );
}

export default App;
