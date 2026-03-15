function generateId(fullname) {

  const names = fullname.trim().toUpperCase().split(" ");

 
  const firstInitial = names[0]?.[0] || "";
  const secondInitial = names[1]?.[0] || "";

  const initials = firstInitial + secondInitial;

 
  const randomID = Math.floor(Math.random() * 9000) + 1000;

  return `ID-${randomID}${initials}`;
}

module.exports = { generateId };