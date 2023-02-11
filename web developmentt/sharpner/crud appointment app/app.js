const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

let editing = false;

const renderExpenses = () => {
  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const { description, amount } = expense;
    expenseList.innerHTML += `
      <tr>
        <td>${description}</td>
        <td>${amount}</td>
        <td>
          <a href="#" class="btn btn-danger" data-index="${index}">Delete</a>
          <a href="#" class="btn btn-secondary" data-index="${index}">Edit</a>
        </td>
      </tr>
    `;
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.getElementById('description').value;
  const amount = document.getElementById('amount').value;
  if (editing) {
    expenses.push({ description, amount });
    editing = false;
  } else {
    expenses.push({ description, amount });
  }
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpenses();
  form.reset();
});

expenseList.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-danger')) {
    const index = e.target.dataset.index;
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
  } else if (e.target.classList.contains('btn-secondary')) {
    const index = e.target.dataset.index;
    const { description, amount } = expenses[index];
    document.getElementById('description').value = description;
    document.getElementById('amount').value = amount;
    expenses.splice(index, 1);
    editing = true;
  }
});

renderExpenses();
