# Interview Readiness — Scope & Sequence

Status: **Baseline curriculum (assume zero current mastery)**

## Purpose

Build durable data-structures, algorithms, and coding-interview capability from first principles. Prior coursework and old repositories are treated as **exposure evidence**, not current mastery evidence. Every branch must be demonstrated again.

This track complements LaunchCode while LaunchCode remains the primary mission. It becomes a major interview-preparation track after LaunchCode.

## Evidence model

A concept is tracked separately through:

1. **Learned** — can explain the idea and vocabulary.
2. **Implemented** — can build/use it with normal references.
3. **Retrieved** — can reproduce the core idea cold.
4. **Recognized** — can identify when the concept/pattern applies in a disguised problem.
5. **Solved** — can solve an unseen problem without solution access.
6. **Analyzed** — can justify time/space complexity and tradeoffs.
7. **Timed** — can do the above under interview constraints while communicating.
8. **Retained** — can repeat performance after spaced delay.
9. **Transferred** — can apply it in a materially different problem/context.

Completion never implies mastery or retention.

## Source roles

- **Data Structures Demystified (Keogh & Davidson)** — concrete introductory/rebuilding reference.
- **The Algorithm Design Manual, 3e (Skiena)** — practical algorithm-design spine and interview-oriented reasoning.
- **Algorithms (Jeff Erickson)** — deeper reasoning, proofs, recurrence/algorithm-design work after foundations.
- **Problems on Algorithms (Izadkhah)** — large exercise bank for retrieval, discrimination, and progressive difficulty.
- **AlgoExpert** — external interview-transfer environment; do not copy proprietary problem statements/solutions into this repository.
- **Existing repository exercises/tests** — implementation and retrieval evidence.

## Scope and sequence

### Phase 0 — Programming & analysis foundations
**Goal:** remove language mechanics from the critical path.

Branches:
- variables, values, references, mutation
- functions, scope, call stack
- loops and iteration
- arrays/strings/objects/maps/sets
- recursion fundamentals
- testing and debugging
- memory/reference mental model
- Big-O vocabulary
- counting operations; common growth rates
- time vs space tradeoffs

Exit evidence:
- trace code cold
- write small functions without scaffolding
- explain reference vs value behavior
- derive complexity for simple loops and nested loops
- implement basic recursion and explain base/recursive cases

### Phase 1 — Arrays, strings, hashing
Branches:
- array traversal and in-place mutation
- frequency maps / counting
- hash maps and sets
- two pointers
- sliding window
- prefix/suffix accumulation
- sorting as preprocessing
- matrix/grid traversal

Interview transfer:
- start with easy recognition problems
- progress to disguised combinations
- require brute-force baseline before optimization when useful

### Phase 2 — Linked structures, stacks, queues
Branches:
- singly/doubly linked lists
- pointer/reference manipulation
- fast/slow pointers
- reversal
- stack LIFO model
- queue FIFO model
- monotonic stack/queue (later extension)

Exit evidence:
- implement core structures cold
- draw/trace mutations
- choose linked vs contiguous representation based on operations
- solve unseen traversal/manipulation problems

### Phase 3 — Searching, sorting, binary search
Branches:
- linear search
- binary search invariants
- binary search on answer space
- insertion/selection/bubble as analysis exercises
- merge sort
- quicksort
- heap sort concept
- stability/in-place/comparison tradeoffs

Exit evidence:
- implement binary search and merge sort cold
- identify search-space monotonicity
- compare major sorting algorithms by time, space, stability, and use case

### Phase 4 — Trees, BSTs, heaps
Branches:
- tree vocabulary and recursive structure
- DFS: preorder/inorder/postorder
- BFS / level order
- BST invariants
- insertion/search/deletion concepts
- height/balance
- heaps / priority queues
- recursive tree problem decomposition

Interview transfer:
- path/ancestor/depth problems
- validation
- reconstruction/traversal
- top-k / priority problems

### Phase 5 — Recursion and backtracking
Branches:
- recursion tree mental model
- choice/explore/unchoose
- subsets
- permutations
- combinations
- constraint search
- pruning

Exit evidence:
- derive recursive state and base case from problem definition
- estimate branching/time cost
- distinguish ordinary recursion from backtracking

### Phase 6 — Graphs
Branches:
- representations: adjacency list/matrix
- BFS and DFS
- connected components
- cycle detection
- topological ordering
- shortest-path intuition
- Dijkstra
- union-find
- minimum-spanning-tree concepts (extension)

Exit evidence:
- translate word problems into graph models
- choose BFS vs DFS intentionally
- implement traversals cold
- reason about visited state and complexity

### Phase 7 — Greedy and dynamic programming
Branches:
- greedy-choice reasoning
- overlapping subproblems
- optimal substructure
- memoization
- tabulation
- 1D DP
- 2D/grid DP
- subsequence/knapsack families
- interval/state design

Sequence rule:
Do not teach DP as memorized templates. Start from brute force → repeated state → recurrence → memoization → tabulation → optimization.

### Phase 8 — Algorithm design & advanced interview integration
Branches:
- divide and conquer
- recurrence relations / Master-method intuition
- interval problems
- tries
- advanced heaps
- advanced graph combinations
- bit manipulation fundamentals
- randomized/hash reasoning where useful
- mixed-pattern problems

Use Skiena/Erickson more heavily here.

### Phase 9 — Interview performance
Branches:
- clarify requirements
- produce examples and edge cases
- communicate brute force
- derive optimization aloud
- code cleanly without excessive backtracking
- test manually
- complexity analysis
- respond to hints
- debugging under time
- 45-minute single-problem simulations
- multi-problem assessments
- mock interviews

## Initial cadence

While LaunchCode is primary:
- ~30 minutes per session
- 5 sessions/week maximum target
- one new/rebuilt branch at a time
- scheduled retrieval is favored over volume

After LaunchCode:
- expand duration and problem volume based on demonstrated recovery and interview timeline.

## Retrieval schedule

For a newly demonstrated concept, target cold retrieval around:
- +1 day
- +3 days
- +7 days
- +14 days
- +30 days

Intervals adapt to evidence. A failed retrieval creates remediation; it does not erase prior completion.

## Problem progression

For each branch:

**Explain → trace → implement → direct problem → disguised problem → mixed problem → timed problem → delayed retrieval**

Hints are recorded as evidence. A correct answer after substantial hints is not equivalent to a cold solve.

## Starting-from-zero rule

No placement shortcuts are granted from CS 211, CS 251, old GitHub work, or prior completion. Those sources may accelerate relearning, but each branch begins with current mastery = **unknown/unverified** until demonstrated.

## Near-term build order

1. Phase 0 diagnostic and exercises
2. Arrays/strings/hashing sequence
3. linked structures/stacks/queues
4. searching/sorting
5. trees/heaps
6. recursion/backtracking
7. graphs
8. greedy/DP
9. advanced integration
10. timed interview loop

## Repository boundary

This repository stores curriculum, original exercises, evidence metadata, reflections, and the learner's own solutions. For paid/proprietary platforms such as AlgoExpert, store only references/identifiers and performance metadata needed for learning; do not reproduce proprietary prompts or solution content.
