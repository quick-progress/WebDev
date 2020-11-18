/* Базовые функции */
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


/*********
 *  Отправка формы 
*********/

//Перехват отправки

getEl('.main__submit-btn').addEventListener('click', function (evnt) {
  evnt.preventDefault();
  const inputList = document.querySelectorAll('.main__input');

  inputList.forEach( function (item, i, arr) {
    checkInput( item.value, item.type, item );
    console.log(item.value);
  });
});

//Проверка полей формы
function checkInput(inputValue, inputType) {
  switch(inputType) {
    case 'text':
      if ( inputValue.search(/[a-zA-Z]/) > 0 ) {
        
      } else {
        console.log('Error: uncorrect "text"');
      };
      break;
    case 'tel':
      if ( inputValue.length <= 10 || inputValue.search(/[a-zA-Z!@#\$]/) > 0 ) {
        console.log('Error: uncorrect "phone"');
      } else {
        
      };
      break;
    case 'email':
      if ( inputValue.search(/[a-zA-Z-_0-9]@[a-z]{1,}.[a-z]{2,10}/) > 0 ) {
        
      } else {
        console.log('Error: uncorrect "email"');
        return 0;
      };
      break;
  };
};

