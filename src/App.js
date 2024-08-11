import React from 'react';
import Tree from './components/Tree'


const tempData = [
  {
      name: 'Item 1',
      children: [
          { name: 'Item 1.1', children: [{ name: 'Item 1.1.1' }] },
          { name: 'Item 1.2' }
      ]
  },
  {
      name: 'Item 2',
      children: [{ name: 'Item 2.1' }]
  }
];



const App = () => {
    return (
        <div>
            <Tree data={tempData} />
        </div>
    );
};

export default App;
