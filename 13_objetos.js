function printUser(user) {
    console.log("".concat(user.name, " ").concat(user.email, " ").concat(user.age, " ").concat(user.isAdmin));
}
function printCoord(points) {
    console.log(" O eixo x \u00E9 :".concat(points.x, "\nO eixo y \u00E9: ").concat(points.y));
}
printCoord({ x: 100, y: 50 });
printUser({ name: 'John', email: 'John@example.com', age: 40, isAdmin: false });
