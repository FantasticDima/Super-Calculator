
## How it works

The whole calculator runs on one idea: a **running total** plus a **pending
operator**.

- `fold()` takes the number currently in the input and merges it into the
  total using the pending operator
- `op(x)` folds, remembers the clicked operator, clears the input
- `calc()` does the final fold and shows the total

Because it folds sequentially, evaluation is left-to-right:
`2 + 3 * 4 = 20`, not `14`.

Use the on-screen buttons to punch in numbers without needing a keyboard!

## License

[MIT](LICENSE) — do whatever you like, just keep the copyright notice.
