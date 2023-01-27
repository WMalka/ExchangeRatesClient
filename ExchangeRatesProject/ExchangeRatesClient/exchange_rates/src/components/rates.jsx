import { useState } from "react";
import { getRates} from '../services/rates';
import Table from 'react-bootstrap/Table';


export function Rates() {
        const [rates, setRates] = useState([]);
       getRates().then(res => {
                setRates(res.data);
            });
    return (<> 
     <Table >
      <thead>
        <tr>
          <th>#</th>
          <th>Key</th>
          <th>CurrentChange</th>
          <th>CurrentExchangeRate</th>
          <th>LastUpdate</th>
          <th>Unit</th>
        </tr>
      </thead>
        <tbody>
    {rates.map((rate, index) => (
      
        <tr>
          <td>{index+1}</td>
          <td>{rate.Key}</td>
          <td>{rate.CurrentChange}</td>
          <td>{rate.CurrentExchangeRate}</td>
          <td>{rate.LastUpdate}</td>
          <td>{rate.Unit}</td>
        </tr> 
    )
    )}
    </tbody>
    </Table>
     </>)
}

