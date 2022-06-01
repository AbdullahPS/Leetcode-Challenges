/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
let maxDepth=0;
const getDepth=(node,depth)=>{
if(!node)return;
if(depth>maxDepth) maxDepth=depth
getDepth(node.right,depth+1)
getDepth(node.left,depth+1)
    
}
getDepth(root,1)
return maxDepth;
};