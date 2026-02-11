let primaryContact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active",
};
const newVar = "id"; //limit the newVar to have values only from the key of the Contact class
//Best use case is when passing the keys to index the Class in a function
function getValue(source, field) {
    return source[field];
}
console.log(getValue(primaryContact, "name"));
