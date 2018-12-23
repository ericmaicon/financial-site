import React, { Fragmnet } from "react";
import { Table } from "reactstrap";
import { Query } from "react-apollo";

import stocks from "../../queries/stocks";

const StockList = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <Query query={stocks}>
        {({ loading, data: { stocks } }) => {
          if (loading) {
            return (
              <tbody>
                <tr>
                  <td colSpan={2}>loading...</td>
                </tr>
              </tbody>
            );
          }

          return (
            <tbody>
              {stocks.map(stock => (
                <tr key={stock.id}>
                  <td>{stock.code}</td>
                  <td>{stock.company}</td>
                </tr>
              ))}
            </tbody>
          );
        }}
      </Query>
    </Table>
  );
};

export default StockList;
