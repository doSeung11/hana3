const users = [
    { id: 1, name: '홍길동', tel: '01088889991', addr: '서울' },
    { id: 2, name: '김길동', tel: '01088889992', addr: '부산' },
    { id: 3, name: '이길동', tel: '01088889993', addr: '서울' },
    { id: 4, name: '박길동', tel: '01088889994', addr: '서울' },
  ];

  const tableBody = document.querySelector('#userTable tbody');

  users.forEach(user => {
    const row = document.createElement('tr');

    Object.values(user).forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });

    const deleteButtonCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteUser(user.id));
    deleteButtonCell.appendChild(deleteButton);
    row.appendChild(deleteButtonCell);

    tableBody.appendChild(row);
  });

  function deleteUser(userId) {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      // Update the table after deleting the user
      renderTable();
    }
  }

  function renderTable() {
    // Clear existing rows
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }

    // Render the table again
    users.forEach(user => {
      const row = document.createElement('tr');

      Object.values(user).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });

      const deleteButtonCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteUser(user.id));
      deleteButtonCell.appendChild(deleteButton);
      row.appendChild(deleteButtonCell);

      tableBody.appendChild(row);
    });
  }

  //row.remove()