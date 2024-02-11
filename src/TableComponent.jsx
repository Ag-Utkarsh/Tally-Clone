import React from 'react';

const TableComponent = () => {
  const data = [
    {
      name: 'Tushar Vij',
      email: 'tushar03vij@gmail.com',
      mobile: '+919988117025',
      where: 'ALIAS Mer',
    },
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      mobile: '+1234567890',
      where: 'Some Location',
    },
    {
      name: 'Alice Smith',
      email: 'alice@example.com',
      mobile: '+9876543210',
      where: 'Wonderland',
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      mobile: '+5555555555',
      where: 'Cityville',
    },
    {
      name: 'Sarah Brown',
      email: 'sarah@example.com',
      mobile: '+7777777777',
      where: 'Beachtown',
    },
    {
      name: 'Sarah Brown',
      email: 'sarah@example.com',
      mobile: '+7777777777',
      where: 'Beachtown',
    },
    {
      name: 'Sarah Brown',
      email: 'sarah@example.com',
      mobile: '+7777777777',
      where: 'Beachtown',
    },
    {
      name: 'John Doe',
      email: 'john@example.com',
      mobile: '+1111111111',
      where: 'Townville',
    },
    {
      name: 'Jane Doe',
      email: 'jane@example.com',
      mobile: '+2222222222',
      where: 'Villageville',
    },
    {
      name: 'Jim Doe',
      email: 'jim@example.com',
      mobile: '+3333333333',
      where: 'Cityville',
    },
    {
      name: 'Jill Doe',
      email: 'jill@example.com',
      mobile: '+4444444444',
      where: 'Countryville',
    },
    {
      name: 'Jack Doe',
      email: 'jack@example.com',
      mobile: '+5555555555',
      where: 'Farmville',
    },
    {
      name: 'Julia Doe',
      email: 'julia@example.com',
      mobile: '+6666666666',
      where: 'Lakeville',
    },
    {
      name: 'Jerry Doe',
      email: 'jerry@example.com',
      mobile: '+7777777777',
      where: 'Forestville',
    },
    {
      name: 'Jenny Doe',
      email: 'jenny@example.com',
      mobile: '+8888888888',
      where: 'Hillville',
    },
    {
      name: 'Jeff Doe',
      email: 'jeff@example.com',
      mobile: '+9999999999',
      where: 'Riverville',
    },
    {
      name: 'Joyce Doe',
      email: 'joyce@example.com',
      mobile: '+1010101010',
      where: 'Islandville',
    },
    {
      name: 'Joe Doe',
      email: 'joe@example.com',
      mobile: '+1212121212',
      where: 'Beachville',
    },
    {
      name: 'Jasmine Doe',
      email: 'jasmine@example.com',
      mobile: '+1313131313',
      where: 'Desertville',
    },
    {
      name: 'Jacob Doe',
      email: 'jacob@example.com',
      mobile: '+1414141414',
      where: 'Jungleville',
    },
    {
      name: 'Jade Doe',
      email: 'jade@example.com',
      mobile: '+1515151515',
      where: 'Mountainville',
    },
    {
      name: 'Jesse Doe',
      email: 'jesse@example.com',
      mobile: '+1616161616',
      where: 'Prairieville',
    },
    {
      name: 'Joan Doe',
      email: 'joan@example.com',
      mobile: '+1717171717',
      where: 'Swampville',
    },
    {
      name: 'Jared Doe',
      email: 'jared@example.com',
      mobile: '+1818181818',
      where: 'Valleyville',
    },
    {
      name: 'Jenna Doe',
      email: 'jenna@example.com',
      mobile: '+1919191919',
      where: 'Woodville',
    },
    {
      name: 'Jason Doe',
      email: 'jason@example.com',
      mobile: '+2020202020',
      where: 'Fieldville',
    },
    {
      name: 'Jasmine Doe',
      email: 'jasmine2@example.com',
      mobile: '+2121212121',
      where: 'Skyville',
    }
    // Add more data entries here
  ];

//   const [tableData, setTableData] = useState(data);

  return (
    <table className="table-container">
      <thead>
        <tr className="table-header">
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Where</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index} className="table-row">
            <td className="table-cell">{entry.name}</td>
            <td className="table-cell">{entry.email}</td>
            <td className="table-cell">{entry.mobile}</td>
            <td className="table-cell">{entry.where}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;