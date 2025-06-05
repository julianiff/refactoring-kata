# Encapsulate Variable

Replace direct access to variables with getter/setter methods. This provides a seam for adding behavior like validation, change tracking, or lazy initialization. Start with global variables and public fields - these create the tightest coupling. This refactoring is essential for maintaining invariants and enabling future enhancements.

## Resources
- [Official Catalog](https://refactoring.com/catalog/encapsulateVariable.html)
- [Interactive Tutorial](https://refactoring.guru/encapsulate-field)
- [Memento Pattern](https://refactoring.guru/design-patterns/memento)
- [Legacy Code Refactoring](https://github.com/jbrains/trivia)
