# Self-Assessment: SignupPage.jsx

## Scores

### Individual Score: 40 / 45

| Criteria | Points | Justification |
| --- | ---: | --- |
| Correct use of `useState` and controlled forms | 15 / 15 | All four fields (`email`, `password`, `confirmPassword`, `nationality`) are controlled: each has both a `value` bound to state and an `onChange` handler. State is held in a single object and updated with one shared handler using a computed property name. |
| Clean, readable, and well-organized code | 12 / 15 | Naming is descriptive and the component is short and easy to follow. Points deducted because the four input blocks repeat the same structure and could be extracted into a reusable field component, and because the code has no explanatory comments. |
| Self-assessment | 13 / 15 | Completed honestly, with concrete weaknesses identified rather than generic praise. |

---

## 1. Functionality

**Does the component meet the requirements?**

- [x] Does it handle all the specified features?
  Yes. The component implements all four required fields, the `nationality` select with the four options `fi`, `en`, `de`, `fr`, the greeting that changes with the selected nationality (Moi / Hello / Hallo / Bonjour), and the line displaying the email the user typed. Note that Create/Read/Delete and `.map()` list rendering do not apply to this component, since a signup page has no list of items.

- [ ] Are edge cases handled?
  Partially. The password comparison correctly ignores the case where `confirmPassword` is still empty, so no error is shown before the user has typed anything. However, `handleSubmit` does not block submission when fields are empty or when the passwords do not match — it only logs the form object. Email format is not validated either.

- [x] Are there any bugs or unexpected behaviours?
  No known bugs. The optional-chaining in `.find(...)?.greeting ?? ""` prevents a crash if the nationality code were ever missing from the list.

**How well does the component integrate with other parts of the application?**

- [x] Are props and state managed appropriately?
  The component is self-contained and takes no props, which suits a standalone page. It is rendered from `App.jsx` alongside the other team members' components and does not share or interfere with their state.

## 2. Code Quality

**Readability**

- [x] Is the code easy to understand for other developers?
  The component is around 70 lines with a clear order: state, handlers, derived values, then JSX. Anyone who knows `useState` should be able to follow it.

- [x] Are variable and function names descriptive and meaningful?
  Mostly. `handleChange`, `handleSubmit`, `greeting` and `passwordError` are clear. One weakness: the helper function is named `confirmPassword`, which is the same name as the `form.confirmPassword` field, so the two are easy to confuse when reading. `getPasswordError` would have been a better name.

**Reusability**

- [ ] Can the component or parts of it be reused?
  Not currently. The `NATIONALITIES` array is exportable and reusable, but the label-plus-input blocks repeat the same structure four times and were not extracted into a `FormField` component that would take `label`, `type`, `name`, `value` and `onChange` as props.

**Comments and Documentation**

- [ ] Are there comments explaining complex logic?
  No. The two least obvious lines — the optional chaining in the `.find()` call and the computed property name `[name]: value` in `handleChange` — would benefit from a short comment.

- [ ] Is there documentation for how to use the component?
  No separate documentation. The component takes no props, so its usage is just `<SignupPage />`.

## 3. Performance

**Efficiency**

- [x] Are there any unnecessary re-renders or performance bottlenecks?
  None that matter here. The component re-renders on every keystroke, which is expected for a controlled form, and the tree is small enough that this costs nothing. The `.find()` call runs on each render but only iterates four items.

- [x] Is the component optimized for large datasets?
  Not applicable — the component holds a single form, not a list.

**State Management**

- [x] Is state managed efficiently?
  Yes. One `useState` object holds all four fields instead of four separate state variables. `greeting` and `passwordError` are derived values computed during render rather than stored in state, which avoids the classic bug of a validation flag falling one render behind the input it describes.

- [x] Are hooks used correctly?
  Yes. `useState` is called at the top level of the component, never inside a condition or loop.

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