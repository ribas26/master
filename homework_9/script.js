'use strict'
fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then((data) => {
        console.log('-----------');
        console.log('Пункт №1:');
        console.log('-----------');
        console.log(data?.data);

        console.log('-----------');
        console.log('Пункт №2:');
        console.log('-----------');
        data?.data.forEach(element => {
            console.log(element.last_name);
        })

        console.log('-----------');
        console.log('Пункт №3:');
        console.log('-----------');
        data?.data.forEach(element => {
            // начинается с буквы F
            if (element.last_name[0] === 'F') {
                console.log(element)
            }
        })

        console.log('-----------');
        console.log('Пункт №4:');
        console.log('-----------');
        let userNames = data?.data.reduce((sum, current, index) => {
            if (sum === 0) {
                sum = ''
            }
            if (index === data?.data.length - 1) {
                return sum + current.first_name + ' ' + current.last_name + '.';
            }
            return sum + current.first_name + ' ' + current.last_name + ', ';
        }, 0);
        console.log(`Наша база содержит данные следующих пользователей:\n${userNames}`);

        console.log('-----------');
        console.log('Пункт №5:');
        console.log('-----------');
        console.log(Object.keys(data?.data[0]))
    })