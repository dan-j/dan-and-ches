import React from 'react';

const data = [{
  item: 'A beer in Colombia',
  cost: '£0.45',
}, {
  item: '2 nights in Bogota',
  cost: '£20',
}, {
  item: 'Meal for 2 in Bogota',
  cost: '£18',
}, {
  item: 'A night on Costeño Beach',
  cost: '£25',
}, {
  item: '4 day Lost City Trek',
  cost: '£200',
}, {
  item: 'PADI Open Water Certification',
  cost: '£200',
}, {
  item: 'A night on Rosario Island',
  cost: '£15',
}, {
  item: 'Paintballing in Pablo Escobar\'s mansion',
  cost: '£50',
}, {
  item: 'Meal for 2 in Medellin',
  cost: '£15',
}, {
  item: 'Coffee tour and night stay in Salento',
  cost: '£15',
}, {
  item: 'See the tallest palm trees in the world',
  cost: '£5',
}, {
  item: '2 nights in Cusco',
  cost: '£25',
}, {
  item: 'Salkantay trek to Macchu Picchu',
  cost: '£170',
}, {
  item: 'Sandboarding in Peru',
  cost: '£90',
}, {
  item: 'Day trip to the highest ski slope slope in the world, Bolivia',
  cost: '£55',
}, {
  item: 'See dinosaur footprints in Bolivia',
  cost: '£10',
}, {
  item: 'Bolivian Amazon rain forest 4 day tour',
  cost: '£200',
}, {
  item: 'Wine tour of Chilean vineyards',
  cost: '£50',
}];

const Registry = () => (
  <div>
    <p style={{ margin: '0 auto 1em', maxWidth: 550 }}>Because of our plans to travel we&apos;re not
      expecting many gifts, but if you wanted to contribute, below is what we&apos;d get</p>
    <table className="registry">
      <thead>
        <tr>
          <th>Activity</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.item}>
            <td>{row.item}</td>
            <td>{row.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Registry;
