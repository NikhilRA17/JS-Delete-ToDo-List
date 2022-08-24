const btn = document.getElementById('btn');
const list = document.getElementById('list');
const input = document.getElementById('input');

btn.style.marginBottom = '20px';

btn.addEventListener('click', function () {
  const value = input.value;

  const element = document.createElement('li');
  const delBtn = document.createElement('button');

  element.setAttribute('class', 'list-group-item');
  delBtn.setAttribute('class', 'btn btn-danger');

  element.style.width = '98%';

  element.style.display = 'block';
  element.style.margin = 'auto';
  // element.style.marginTop = '20px';
  // element.style.marginBottom = '5px';
  element.style.width = '90%';

  delBtn.textContent = 'Delete';
  delBtn.style.width = 'fit-content';
  // delBtn.style.display = 'block';
  delBtn.style.marginLeft = '20px';

  (element.textContent = value), delBtn;

  list.appendChild(element);
  element.appendChild(delBtn);

  element.style.display = 'flex';
  element.style.flexDirection = 'row';

  delBtn.addEventListener('click', function (event) {
    list.removeChild(element);
    element.removeChild(delBtn);
  });

  input.value = '';
});
