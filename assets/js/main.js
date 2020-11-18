/***************************
 *  Базовые функции
***************************/
const deleteElement = (element) => {
  document.querySelector(element).remove();
  return 0;
};

const getEl = (element) => {
  return document.querySelector(element);
};

/* Добавление дополнительной электронной почты */
function addEmail() {
  const additionEmail = `<input class="main__input personal-info" id="person-addition-email" type="email" name="useraddemail" placeholder="Добавьте Вашу почту">`;
  const additionEmailLabel = `<label class="main__label" id="person-addition-label" for="person-addition-email">Дополнительная эл. почта</label>`;
  const emailWrap = getEl('.main__add-email-wrap');

  deleteElement('.main__mail-add');
  deleteElement('.main__btn-discription');

  emailWrap.insertAdjacentHTML('beforeend', additionEmailLabel);
  emailWrap.insertAdjacentHTML('beforeend', additionEmail);
  getEl('.main__delete-email').style.display = 'block';
};

document.querySelector('.main__mail-add').addEventListener('click', addEmail);

/* Удаление дополнительной электронной почты в форме */
function deleteEmail(evnt) {
  evnt.preventDefault();
  const addBtn = `<button class="main__mail-add">+ Добавить</button>`;
  const addBtnLabel = `<span class="main__btn-discription">Добавьте дополнительную эл. почту</span>`;
  const emailWrap = getEl('.main__add-email-wrap');

  deleteElement('#person-addition-label');
  deleteElement('#person-addition-email');

  emailWrap.insertAdjacentHTML('beforeend', addBtnLabel);
  emailWrap.insertAdjacentHTML('beforeend', addBtn);
  getEl('.main__delete-email').style.display = 'none';
  document.querySelector('.main__mail-add').addEventListener('click', addEmail);
};

document.querySelector('.main__delete-email').addEventListener('click', deleteEmail);


/***************************
 *  Отправка формы 
***************************/

//Перехват отправки

getEl('.main__submit-btn').addEventListener('click', function (evnt) {
  console.log(evnt);
  evnt.preventDefault();
  const inputList = document.querySelectorAll('.main__input');

  inputList.forEach( function (item, i, arr) {
    if ( !checkInput( item.value, item.type ) ) {
      item.style.outline = '2px solid #ff6a6a';
      item.title = "Допустимы символы a-z, A-Z, а-я, А-Я, 0-9";
    } else if ( item.value === '' ) {
      item.style.outline = '2px dotted #ff6a6a';
      item.title = "Это поле не должно быть пустым!";
    } else {
      item.style.outline = 'none';
      item.title = "";
    };
  });
});

//Проверка полей формы
function checkInput(inputValue, inputType) {
  switch(inputType) {
    case 'text':
      if ( inputValue.search(/[^A-Za-zа-яА-я0-9-]+/) >=0 ) { return false; } else { return true; };
      break;
    case 'tel':
      if ( inputValue.length > 12 || inputValue.length <= 10 || inputValue.search(/[a-zA-Z!@#\$]/) >= 0 ) { return false; } else { return true; };
      break;
    case 'email':
      if ( inputValue.search(/^[a-zA-Z-_0-9]{1,}@[a-z]{2,}.[a-z]{2,10}$/) >= 0 ) { return true; } else { return false; };
      break;
  };
};

