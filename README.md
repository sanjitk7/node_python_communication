## Understating Python to NodeJS Interfacing

1. Creating a Python child process in nodeJS to run Python for computations - Simple Summation by using Python for computation
2. Simple Express server and accessing endpoint with requests from python

### Why Python for computations?

Although for a simple summing operation you’re better off sticking to nodeJs itself, for more complex operations(like maybe doing signal processing or finding the frequency spectrum on a series of numbers) its highly advisable to use numpy as the same functionality is just not there in nodeJs (at least not yet). Furthermore, computationally intensive operations will most likely freeze your program, which can be a disaster given the single threaded architecture of node, and they should be moved to their own separate child processes.

~ [source](https://www.sohamkamani.com/blog/2015/08/21/python-nodejs-comm/)