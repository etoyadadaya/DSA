// Definition for a binary tree node.

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true;
  return getHeight(root) !== -1;
}

function getHeight(node) {
  if (node === null) return 0;

  let left = getHeight(node.left);
  let right = getHeight(node.right);

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
}
