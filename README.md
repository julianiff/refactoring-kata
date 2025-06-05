# 🔧 TypeScript Refactoring Katas

(AI generated readme and katas)

A hands-on collection of code exercises for practicing Martin Fowler's refactoring techniques. Each kata presents real-world code scenarios that benefit from systematic refactoring.

## 🎯 Why This Repository?

The katas are organized by refactoring technique, allowing focused practice on one concept at a time. All examples come with tests, so you can refactor with confidence knowing you haven't broken anything.

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/refactoring-katas.git
cd refactoring-katas

# Install dependencies
npm install

# Run all tests to ensure everything works
npm test

# Start practicing!
npm run test:watch
```

## 📚 Kata Structure

The repository contains 7 refactoring techniques, each with 3 practice exercises:

### 1. **Extract Method**

Learn to identify and extract cohesive code fragments into well-named methods.

- Receipt Printer - Separating presentation, calculation, and formatting logic
- User Validator - Breaking down complex validation rules
- Report Generator - Organizing HTML generation and data processing

### 2. **Replace Conditional with Polymorphism**

Transform type-checking switches into elegant object-oriented designs.

- Animal Sounds - Classic polymorphism example with different animal types
- Employee Payroll - Calculating pay with type-specific rules
- Shape Areas - Geometric calculations begging for inheritance

### 3. **Extract Class**

Identify and separate mixed responsibilities into focused classes.

- Order Processing - Customer info mixed with order logic
- Blog Post - Author details entangled with content management
- Game Character - Stats, inventory, and combat in one massive class

### 4. **Introduce Parameter Object**

Group parameters that travel together into meaningful objects.

- Date Range Operations - Start/end dates appearing everywhere
- Geographic Search - Coordinates and units repeated across methods
- Product Filters - Search criteria duplicated in multiple signatures

### 5. **Replace Magic Literal**

Give meaning to mysterious numbers and strings in your code.

- Status Checker - Numeric status codes without explanation
- Game Physics - Hardcoded physics constants
- Data Validator - Business rules hidden in numeric comparisons

### 6. **Extract Variable**

Break complex expressions into understandable intermediate steps.

- Price Calculator - Multi-step calculation in one line
- URL Builder - String concatenation with inline conditionals
- Score Computation - Game scoring with embedded business logic

### 7. **Encapsulate Variable**

Hide direct field access behind methods to enable future changes.

- Global Config - Exposed configuration variables
- Game State - Public game state modified from anywhere
- Cache Manager - Direct manipulation of cache internals

## 🎮 How to Practice

1. **Choose a technique** you want to practice
2. **Open the kata file** (e.g., `01-extract-method/receipt-printer.ts`)
3. **Run the tests** to understand current behavior: `npm test receipt-printer`
4. **Apply the refactoring** technique while keeping tests green
5. **Compare your solution** with common patterns (or create your own!)

### Tips for Effective Practice

- Start with the tests - understand what the code does before changing it
- Make small, incremental changes
- Run tests frequently (the watch mode is your friend)
- Try multiple approaches - there's rarely just one "right" way
- Focus on readability and intention-revealing names

## 🛠️ Available Scripts

- `npm test` - Run all tests once
- `npm run test:watch` - Run tests in watch mode (recommended while refactoring)
- `npm run test:ui` - Open Vitest's UI for visual test running
- `npm run test:coverage` - See which code paths your tests cover

## 📖 Resources for Learning

Each kata folder includes a README with links to:

- Martin Fowler's official refactoring catalog
- Interactive tutorials with examples
- Related design patterns and principles
- Video demonstrations and articles

The exercises are intentionally simple to let you focus on the refactoring technique rather than domain complexity. In real projects, you'll face more intricate scenarios, but the same principles apply.
