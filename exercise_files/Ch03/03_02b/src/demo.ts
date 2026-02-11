type ContactName = string;
type ContactStatus = "active" | "inactive" | "new";
type ContactBirthDate = Date | number | string;

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
  status: "active",
};
type contactFields = keyof Contact;
const newVar: contactFields = "id"; //limit the newVar to have values only from the key of the Contact class
//Best use case is when passing the keys to index the Class in a function
function getValue<T>(source: T, field: keyof T) {
  return source[field];
}

console.log(getValue(primaryContact, "name"));
