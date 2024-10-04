import { useState } from "react"

const TreeNode = ({ node, onAddNode }) => {
    const [expanded, setExpanded] = useState(false)

    const toggleExpand = () => {
        setExpanded(!expanded);
    }
    const handelADDNode = () => {
        const nodeName = prompt('enter new node ');
        if (nodeName) {
            onAddNode(node.id, nodeName);
        }
    }
    return (
        <>
            <li>
                <div className="node" onClick={toggleExpand}>
                    {node.children.length > 0 && (
                        <span>{expanded ? '[-]' : '[+]'}</span>
                    )}
                    {node.name}
                </div>
                
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handelADDNode}>
                    ADD Child
                </button>
                {expanded && node.children.length > 0 && (
                    <ul className="text-bold text-red-800">
                        {node.children.map((child) => (
                            <TreeNode key={child.id} node={child} onAddNode={onAddNode} />
                        ))}
                    </ul>


                )}

            </li>
        </>
    )
}
export default TreeNode;