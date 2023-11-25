let password = "hi";

let lib = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTWXYZ0123456789";

class letter {
  constructor(v) {
    this.v = v;
  }

  increament() {
    if (this.v < lib.length - 1) {
      this.V++;
      return 1;
    } else {
      this.v = 0;
      return 0;
    }
  }

  get value() {
    return lib[this.v];
  }
}

class word {
  constructor() {
    this.letters = new Array(new letter());
  }

  increament() {
    try {
      for (let i = 0; this.letters[i].increament() == 0; i++) {}
    } catch (err) {
      this.letters.push(new letter(0));
    }
  }

  get value() {
    let out = "";

    for (let i of this.letters) {
      out += i.value;
    }

    return out;
  }
}

x = new word();

for (let i = 0; i < 150; i++) {
  console.log(i, x.value);
  x.increament();
}
