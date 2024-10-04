import { Children, useState } from "react"
import TreeNode from "./Treenode"

const Tree = () => {
    const [treeData, SetTreeData] = useState({
        id: 1,
        name: 'Root',
        children: []
    })
    const addNode = (parentId, nodeName) => {
        const addNodeRecursive = (node) => {
            if (node.id === parentId) {
                node.children.push
                    ({
                        id: Date.now(),
                        children: [],
                    })
            }
            else {
                node.children.forEach((child) => addNodeRecursive(child));
            }
        }
        const updatedTree = { ...treeData };
        addNodeRecursive(updatedTree)
        SetTreeData(updatedTree)
    }



    return (
        <>
            <div>
                <h2 className="text-center text-3xl font-bold ">Dynamic Tree Structure</h2>
                <h1 className="text-green-900 text-xl font-semibold text-center">this sign on click then exapand tree this just message  [+]</h1>
                <h1 className="text-red-900 text-xl font-semibold text-center">this sign on click then disable tree this just message [-]</h1>


                <ul className="text-base text-center text-green-800">
                    <TreeNode node={treeData} onAddNode={addNode} />
                </ul>
            </div>
        </>
    )
}

export default Tree;