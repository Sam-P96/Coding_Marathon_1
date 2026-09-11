# Self-Assessment: SignupPage.jsx

## Scores

### Group Score: 35 / 35

| Criteria | Points | Justification |
| --- | ---: | --- |
| Effective Git branching and merging | 17 / 20 | Each member developed their component on a separate branch and no component code was committed directly to `main`. All work reached `main` through pull requests — seven in total, all merged and none left open — and the repository history shows 35 commits, well above the three-commit minimum per person. Merge conflicts in `App.jsx` were resolved by keeping every member's import and render line. Points deducted because our pull request reviews were mostly quick approvals rather than written comments on each other's code, and because the deployment configuration fix was pushed at the end without going through a pull request. |
| GitHub Pages deployment | 13 / 15 | The application is deployed publicly and adding and deleting items works on the live version. Our first deployment served a blank page because the `base` option in `vite.config.js` did not match the repository name; we identified it from the 404 errors on the asset files in the browser console, corrected the path and redeployed successfully. Points deducted because two members ran `npm run deploy` simultaneously before we agreed on a single person handling deployment, and because the repository README was left as the default Vite template rather than describing the project. |

### Individual Score: 40 / 45

## 1. Functionality

**Does the component meet the requirements?**

- [x] Does it handle all the specified features?
- [ ] Are edge cases handled?
- [x] Are there any bugs or unexpected behaviours?

**How well does the component integrate with other parts of the application?**

- [x] Are props and state managed appropriately?

## 2. Code Quality

**Readability**

- [x] Is the code easy to understand for other developers?
- [x] Are variable and function names descriptive and meaningful?

**Reusability**

- [x] Can the component or parts of it be reused?

**Comments and Documentation**

- [ ] Are there comments explaining complex logic?
- [x] Is there documentation for how to use the component?


## 3. Performance

**Efficiency**

- [] Are there any unnecessary re-renders or performance bottlenecks?
- [] Is the component optimized for large datasets?

**State Management**

- [x] Is state managed efficiently?
- [x] Are hooks used correctly?

## 4. Overall Assessment

**Strengths**

- All four inputs are properly controlled, with a single handler covering the whole form via a computed property name.
- Nationality data lives in one array; both the `<option>` list and the greeting are derived from it, so adding a language means editing one place.
- `.map()` with a `key` is used to render the select options.
- Validation results are derived values rather than extra state, which keeps them always in sync with the inputs.
- Optional chaining guards the `.find()` lookup against a crash.

**Areas for Improvement**

- `handleSubmit` does not validate anything; the form can be submitted empty or with mismatched passwords.
- No email format validation, and the visual valid/invalid feedback suggested as optional in the brief was not implemented.
- The repeated label/input markup should be extracted into a reusable `FormField` component.
- The helper function name `confirmPassword` collides conceptually with the `form.confirmPassword` field.
- `setForm({ ...form, [name]: value })` reads the `form` variable directly instead of using the updater form `setForm((prev) => ...)`. It works correctly here because `handleChange` calls `setForm` only once, but the updater form would be safer if the handler ever grew.
- No comments on the two less obvious lines.

**Action Plan**

1. Rename `confirmPassword` to `getPasswordError`.
2. Add an `isValidEmail` check and disable the submit button until the email is valid and the two passwords match.
3. Extract a `FormField` component and use it for the three text inputs.
4. Switch `handleChange` to the updater form of `setForm`.
5. Add short comments above the `.find()` line and the computed property name.

## 5. Additional Notes

SignupPage is the only one of the five components with no list, so it does not exercise `.map()` over user data, delete operations, or child component extraction the way `BookCollectionManager` or `ShoppingCart` do. I compensated partly by driving the select options from a data array with `.map()`, but I am aware this component involved less work than the others and I have scored myself accordingly rather than claiming full marks.