let total = 0, pending = null;

function fold() {
  const n = parseFloat(i.value);
  if (isNaN(n)) return;
  if (pending === null) total = n;
  else if (pending === '+') total += n;
  else if (pending === '-') total -= n;
  else if (pending === '*') total *= n;
  else if (pending === '/') total /= n;
}

function op(x) {
  fold();
  pending = x;
  i.value = '';
  display.textContent = total + ' ' + x;
}

function calc() {
  fold();
  pending = null;
  i.value = total;
  display.textContent = '= ' + total;
}

function num(n) {
  i.value += n;
}

function clr() {
  i.value = '';
  total = 0;
  pending = null;
  display.textContent = '';
}