let health = Number(prompt('Введите число параметра "здоровье" для персонажа'))
debugger;
if (health < 0 || !health) {
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
    console.log(health, typeof(health))
    alert(`Параметр "здоровье" равен ${health}`);
}