const user = {
  name: "이효석",
  sayHello: function () {
    console.log(`안녕하세요. ${this.name} 님`);
  }
};

user.sayHello(); //안녕하세요. 이효석님






const boy = {
  name: "Mike",
  sayHello,
}

const girl = {
  name: "Jane",
  sayHello,
}

function sayHello() {
  console.log(`Hello, I'm ${this.name}`);
}

boy.sayHello(); //Hello, I'm Mike
girl.sayHello(); // Hello, I'm Jane 