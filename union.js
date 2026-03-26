function empinfo(ename) {
    if (typeof ename == "string") {
        return "name is :-" + ename;
    }
    if (typeof ename == "number") {
        return "name is :-" + ename;
    }
    if (typeof ename == "boolean") {
        return "name is :-" + ename;
    }
}
console.log(empinfo("hiren"));
console.log(empinfo(101));
console.log(empinfo(true));
