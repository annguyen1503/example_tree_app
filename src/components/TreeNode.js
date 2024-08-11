import React, { useState } from 'react';


const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <div className='tree-node'>
          <div onClick={() => setIsExpanded(!isExpanded)}>
              {node.children && <span>{isExpanded ? '[-]' : '[+]'}</span>}  {/* check if have children */}
              {node.name}
          </div>
          {isExpanded && node.children && node.children.map((child, i) => (
              <TreeNode key={i} node={child} />
          ))}
      </div>
  );
};

export default TreeNode;

