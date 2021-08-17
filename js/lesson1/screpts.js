function run() {
  var a = 0;

  if (a == 1) {
    return c;
  }

  for (let i = 1; i < 10; i++) {
    console.log(i);
  }

  return (d = a);
}

run();

eslint - errors.txt:
no-var
eqeqeq
no-undef
no-plusplus
no-return-assign
