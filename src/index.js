const obj = {
  foo: {
    bar: {
      baz: 42
    }
  }
};

const baz = obj?.foo?.bar?.baz; // 42

const safe = obj?.qux?.baz; // undefined

const a = 1 + 1;

console.log(baz, safe);
