import gql from "graphql-tag";

const stocks = gql`
  {
    stocks {
      id
      code
      company
      company_segment
      sector
      sub_sector
    }
  }
`;

export default stocks;
