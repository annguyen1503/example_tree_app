import React from "react";
import TreeNode from './TreeNode'
import './TreeNode.css'



const Tree = ({ data }) => {
    return (
        <div>
            {data.map((node, index) => (
                <TreeNode key={index} node={node} />
            ))}
        </div>
    );
};

export default Tree;