// Djikstra's Algorithm
// PSEUDO
// Set each node's position to infinity
// for each node in the graph
//     set the node's distance to infinity
//     set the node's parent to none
// // Create an unexplored set
// let the unexploredSet equal a set of all the nodes
// while the unexploredSet is not empty
//     // Get the current node
//     let the currentNode equal the node with the smallest distance
//     remove the currentNode from the unexploredSet
//     // Check completed
//     if currentNode's position is your goal
//         Congratz! You've found the end! Backtrack to get path
//     // Get all the neighbors
//     for each neighbor (still in unexploredSet) to the currentNode
//         // Calculate the new distance
//         let newDist equal currentNode's dist plus distance between
//             the currentNode and the neighbor
//         // Check to see if the new distance is better
//         if newDist is less than currentNode's distance
//             set neighbor's distance to newDist
//             set neighbor's parent to currentNode

const { forEach } = require("core-js/fn/array");

let targetNode; // TODO: Placeholder
let unvisitedNodes = []; //TODO: Populate with all nodes

// Find closest node until visited all nodes
while (unvisitedNodes.length()) {
  let closestNode = unvisitedNodes[0];
  for (let i = 1; i < unvisitedNodes.length; i++) {
    let currentNode = unvisitedNodes[i];
    if (currentNode < closestNode) {
      closestNode = currentNode;
    }
    // Remove current node from unvisited set
    unvisitedNodes.splice(i, 1);
  }
  // Target Found
  if (currentNode == targetNode) {
    // Add backtrack
  }
  // Get unvisited neighbours of current node
}
