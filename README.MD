# Component Review and Refactoring

## Issues Identified

1. **Unnecessary Execution of fetchProducts Function:**

   - The component calls the `fetchProducts` function despite the availability of tokens, leading to unnecessary executions.

2. **progressbarWidth Calculation Executed Unconditionally:**

   - The calculation for `progressbarWidth` is executed even when product data is not available, leading to unnecessary computations.

3. **Direct Calling of progressbarWidth Calculation Function:**
   - The `progressbarWidth` calculation function is directly called within JSX, which can impact performance and readability.

## Fixes and Enhancements

To address the identified issues and enhance the component, the following changes were made:

1. **Token Availability Check for fetchProducts Function:**

   - The component now restricts the call to the `fetchProducts` function based on the availability of tokens.

2. **Move fetchData Function to Service Folder:**

   - The `fetchProducts` function has been moved to the service folder to improve code organization and maintainability.

3. **Condition for progressbarWidth Calculation:**

   - A condition has been added to check if product data is available before executing the `progressbarWidth` calculation.

4. **Use of useMemo for progressbarWidth Calculation:**

   - Instead of directly calling the `progressbarWidth` calculation function within JSX, useMemo is now used for optimization. This ensures that the calculation is executed only when necessary.

5. **Move authentication details to redux-store**

   - It's better to keep auth details in central place where each component could access those data where necessary. So I have moved user
     data to redux-store and implemented a reducer to dispatch authentication

By implementing these changes, the component adheres to React best practices, optimizing performance and improving code maintainability. The README serves as a reference for understanding the identified issues and the corresponding solutions applied during the refactoring process.
