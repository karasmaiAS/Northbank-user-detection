const customers = [
  { name: "Olivia Bennett", age: 29, years: 4, country: "United States", mobile: "+1 (202) 555-0101", email: "olivia.bennett@example.com", active: true },
  { name: "Liam Carter", age: 34, years: 6, country: "Canada", mobile: "+1 (202) 555-0102", email: "liam.carter@example.com", active: true },
  { name: "Amelia Foster", age: 26, years: 2, country: "United Kingdom", mobile: "+1 (202) 555-0103", email: "amelia.foster@example.com", active: true },
  { name: "Noah Williams", age: 41, years: 8, country: "Australia", mobile: "+1 (202) 555-0104", email: "noah.williams@example.com", active: true },
  { name: "Sofia Chen", age: 31, years: 5, country: "Singapore", mobile: "+1 (202) 555-0105", email: "sofia.chen@example.com", active: true },
  { name: "Ethan Brooks", age: 38, years: 7, country: "United States", mobile: "+1 (202) 555-0106", email: "ethan.brooks@example.com", active: true },
  { name: "Mia Laurent", age: 24, years: 1, country: "France", mobile: "+1 (202) 555-0107", email: "mia.laurent@example.com", active: true },
  { name: "Lucas Meyer", age: 46, years: 9, country: "Germany", mobile: "+1 (202) 555-0108", email: "lucas.meyer@example.com", active: true },
  { name: "Isabella Rossi", age: 33, years: 3, country: "Italy", mobile: "+1 (202) 555-0109", email: "isabella.rossi@example.com", active: true },
  { name: "James Wilson", age: 28, years: 4, country: "Canada", mobile: "+1 (202) 555-0110", email: "james.wilson@example.com", active: true },
  { name: "Ava Patel", age: 36, years: 6, country: "India", mobile: "+1 (202) 555-0111", email: "ava.patel@example.com", active: true },
  { name: "Benjamin Clarke", age: 52, years: 10, country: "United Kingdom", mobile: "+1 (202) 555-0112", email: "benjamin.clarke@example.com", active: true },
  { name: "Charlotte Nguyen", age: 27, years: 2, country: "Vietnam", mobile: "+1 (202) 555-0113", email: "charlotte.nguyen@example.com", active: false },
  { name: "Henry Kim", age: 43, years: 7, country: "South Korea", mobile: "+1 (202) 555-0114", email: "henry.kim@example.com", active: true },
  { name: "Grace Thompson", age: 30, years: 3, country: "New Zealand", mobile: "+1 (202) 555-0115", email: "grace.thompson@example.com", active: true },
  { name: "Alexander Wright", age: 39, years: 8, country: "United States", mobile: "+1 (202) 555-0116", email: "alexander.wright@example.com", active: true },
  { name: "Lily Anderson", age: 22, years: 1, country: "Sweden", mobile: "+1 (202) 555-0117", email: "lily.anderson@example.com", active: true },
  { name: "Daniel Murphy", age: 47, years: 9, country: "Ireland", mobile: "+1 (202) 555-0118", email: "daniel.murphy@example.com", active: true },
  { name: "Harper Scott", age: 32, years: 5, country: "Australia", mobile: "+1 (202) 555-0119", email: "harper.scott@example.com", active: true },
  { name: "Jack Taylor", age: 35, years: 4, country: "Canada", mobile: "+1 (202) 555-0120", email: "jack.taylor@example.com", active: false },
  { name: "Chloe Dubois", age: 25, years: 2, country: "France", mobile: "+1 (202) 555-0121", email: "chloe.dubois@example.com", active: true },
  { name: "William Harris", age: 44, years: 8, country: "South Africa", mobile: "+1 (202) 555-0122", email: "william.harris@example.com", active: true },
  { name: "Evelyn Garcia", age: 37, years: 6, country: "Spain", mobile: "+1 (202) 555-0123", email: "evelyn.garcia@example.com", active: true },
  { name: "Michael Fischer", age: 50, years: 10, country: "Germany", mobile: "+1 (202) 555-0124", email: "michael.fischer@example.com", active: true },
  { name: "Aria Santos", age: 28, years: 3, country: "Brazil", mobile: "+1 (202) 555-0125", email: "aria.santos@example.com", active: false },
  { name: "Samuel Lee", age: 33, years: 5, country: "Singapore", mobile: "+1 (202) 555-0126", email: "samuel.lee@example.com", active: true },
  { name: "Ella Johansson", age: 40, years: 7, country: "Sweden", mobile: "+1 (202) 555-0127", email: "ella.johansson@example.com", active: true },
  { name: "David Cohen", age: 31, years: 4, country: "Israel", mobile: "+1 (202) 555-0128", email: "david.cohen@example.com", active: true },
  { name: "Zoe Martin", age: 23, years: 1, country: "New Zealand", mobile: "+1 (202) 555-0129", email: "zoe.martin@example.com", active: false },
  { name: "Leo Nakamura", age: 45, years: 9, country: "Japan", mobile: "+1 (202) 555-0130", email: "leo.nakamura@example.com", active: true },
  { name: "Alex Morgan", age: 65, years: 12, country: "Philippines", mobile: "+63 917 555 0131", email: "alex.morgan@example.com", active: true },
  { name: "Nina Reyes", age: 29, years: 3, country: "Philippines", mobile: "+63 917 555 0132", email: "nina.reyes@example.com", active: true },
  { name: "Mateo Cruz", age: 42, years: 7, country: "Philippines", mobile: "+63 917 555 0133", email: "mateo.cruz@example.com", active: true },
  { name: "Priya Shah", age: 35, years: 5, country: "India", mobile: "+91 98765 40134", email: "priya.shah@example.com", active: true },
  { name: "Oliver King", age: 27, years: 2, country: "United Kingdom", mobile: "+44 7700 900135", email: "oliver.king@example.com", active: true },
  { name: "Emma Walker", age: 48, years: 9, country: "Australia", mobile: "+61 412 345 136", email: "emma.walker@example.com", active: true },
  { name: "Gabriel Costa", age: 32, years: 4, country: "Brazil", mobile: "+55 11 95555 0137", email: "gabriel.costa@example.com", active: true },
  { name: "Freya Olsen", age: 39, years: 6, country: "Sweden", mobile: "+46 70 555 0138", email: "freya.olsen@example.com", active: true },
  { name: "Theo Martin", age: 30, years: 3, country: "France", mobile: "+33 6 12 34 01 39", email: "theo.martin@example.com", active: true },
  { name: "Hana Sato", age: 26, years: 2, country: "Japan", mobile: "+81 90 5555 0140", email: "hana.sato@example.com", active: true },
  { name: "Elias Haddad", age: 51, years: 10, country: "Israel", mobile: "+972 50 555 0141", email: "elias.haddad@example.com", active: true },
  { name: "Sophie Turner", age: 33, years: 5, country: "Canada", mobile: "+1 (202) 555-0142", email: "sophie.turner@example.com", active: true },
  { name: "Rafael Mendes", age: 37, years: 6, country: "Portugal", mobile: "+351 912 345 143", email: "rafael.mendes@example.com", active: true },
  { name: "Anika Weber", age: 44, years: 8, country: "Germany", mobile: "+49 1512 3450144", email: "anika.weber@example.com", active: true },
  { name: "Mason Reed", age: 24, years: 1, country: "United States", mobile: "+1 (202) 555-0145", email: "mason.reed@example.com", active: true },
  { name: "Camila Torres", age: 31, years: 4, country: "Mexico", mobile: "+52 55 5555 0146", email: "camila.torres@example.com", active: true },
  { name: "Arjun Nair", age: 46, years: 8, country: "India", mobile: "+91 98765 40147", email: "arjun.nair@example.com", active: true },
  { name: "Isla Campbell", age: 28, years: 3, country: "New Zealand", mobile: "+64 21 555 0148", email: "isla.campbell@example.com", active: true },
  { name: "Min-jun Park", age: 40, years: 7, country: "South Korea", mobile: "+82 10 5555 0149", email: "minjun.park@example.com", active: true },
  { name: "Lucia Bianchi", age: 34, years: 5, country: "Italy", mobile: "+39 320 555 0150", email: "lucia.bianchi@example.com", active: true },
  { name: "Owen Price", age: 55, years: 11, country: "Ireland", mobile: "+353 85 555 0151", email: "owen.price@example.com", active: true },
  { name: "Mei Tan", age: 23, years: 1, country: "Singapore", mobile: "+65 8123 0152", email: "mei.tan@example.com", active: true },
  { name: "Andile Dlamini", age: 36, years: 6, country: "South Africa", mobile: "+27 82 555 0153", email: "andile.dlamini@example.com", active: true },
  { name: "Ines Laurent", age: 41, years: 7, country: "France", mobile: "+33 6 12 34 01 54", email: "ines.laurent@example.com", active: true },
  { name: "Kai Nakamura", age: 30, years: 4, country: "Japan", mobile: "+81 90 5555 0155", email: "kai.nakamura@example.com", active: true },
  { name: "Mila Petrov", age: 38, years: 6, country: "Sweden", mobile: "+46 70 555 0156", email: "mila.petrov@example.com", active: true },
  { name: "Ravi Perera", age: 49, years: 9, country: "Singapore", mobile: "+65 8123 0157", email: "ravi.perera@example.com", active: true },
  { name: "Eva Schneider", age: 27, years: 2, country: "Germany", mobile: "+49 1512 3450158", email: "eva.schneider@example.com", active: true },
  { name: "Diego Alvarez", age: 43, years: 8, country: "Spain", mobile: "+34 612 345 159", email: "diego.alvarez@example.com", active: true },
  { name: "Tala Santos", age: 33, years: 5, country: "Philippines", mobile: "+63 917 555 0160", email: "tala.santos@example.com", active: true },
  { name: "Ruby Collins", age: 28, years: 3, country: "United States", mobile: "+1 (202) 555-0161", email: "ruby.collins@example.com", active: true },
  { name: "Finn O'Connor", age: 39, years: 7, country: "Ireland", mobile: "+353 85 555 0162", email: "finn.oconnor@example.com", active: true },
  { name: "Yuki Tanaka", age: 32, years: 4, country: "Japan", mobile: "+81 90 5555 0163", email: "yuki.tanaka@example.com", active: true },
  { name: "Amara Okafor", age: 35, years: 6, country: "South Africa", mobile: "+27 82 555 0164", email: "amara.okafor@example.com", active: true },
  { name: "Hugo Bernard", age: 47, years: 9, country: "France", mobile: "+33 6 12 34 01 65", email: "hugo.bernard@example.com", active: true },
  { name: "Saanvi Kapoor", age: 25, years: 2, country: "India", mobile: "+91 98765 40166", email: "saanvi.kapoor@example.com", active: true },
  { name: "Oscar Lindberg", age: 42, years: 8, country: "Sweden", mobile: "+46 70 555 0167", email: "oscar.lindberg@example.com", active: true },
  { name: "Pilar Reyes", age: 31, years: 4, country: "Mexico", mobile: "+52 55 5555 0168", email: "pilar.reyes@example.com", active: true },
  { name: "Ethan Parker", age: 29, years: 3, country: "Australia", mobile: "+61 412 345 169", email: "ethan.parker@example.com", active: true },
  { name: "Clara Hoffmann", age: 53, years: 10, country: "Germany", mobile: "+49 1512 3450160", email: "clara.hoffmann@example.com", active: true },
  { name: "Paolo Romano", age: 37, years: 6, country: "Italy", mobile: "+39 320 555 0161", email: "paolo.romano@example.com", active: true },
  { name: "Bea Villanueva", age: 27, years: 2, country: "Philippines", mobile: "+63 917 555 0162", email: "bea.villanueva@example.com", active: true },
  { name: "Nathan Brooks", age: 45, years: 9, country: "Canada", mobile: "+1 (202) 555-0163", email: "nathan.brooks@example.com", active: true },
  { name: "Zara Ahmed", age: 34, years: 5, country: "Singapore", mobile: "+65 8123 0164", email: "zara.ahmed@example.com", active: true },
  { name: "Theo Williams", age: 40, years: 7, country: "United Kingdom", mobile: "+44 7700 900165", email: "theo.williams@example.com", active: true },
  { name: "Valentina Rojas", age: 30, years: 4, country: "Spain", mobile: "+34 612 345 166", email: "valentina.rojas@example.com", active: true },
  { name: "Jun Seo", age: 26, years: 2, country: "South Korea", mobile: "+82 10 5555 0167", email: "jun.seo@example.com", active: true },
  { name: "Layla Hassan", age: 48, years: 9, country: "Israel", mobile: "+972 50 555 0168", email: "layla.hassan@example.com", active: true },
  { name: "Callum Fraser", age: 33, years: 5, country: "New Zealand", mobile: "+64 21 555 0169", email: "callum.fraser@example.com", active: true },
  { name: "Bianca Silva", age: 41, years: 8, country: "Brazil", mobile: "+55 11 95555 0170", email: "bianca.silva@example.com", active: true },
  { name: "Dylan Murphy", age: 24, years: 1, country: "Ireland", mobile: "+353 85 555 0171", email: "dylan.murphy@example.com", active: true },
  { name: "Lena Fischer", age: 36, years: 6, country: "Germany", mobile: "+49 1512 3450172", email: "lena.fischer@example.com", active: true },
  { name: "Enzo Moretti", age: 50, years: 10, country: "Italy", mobile: "+39 320 555 0173", email: "enzo.moretti@example.com", active: true },
  { name: "Maya Patel", age: 29, years: 3, country: "India", mobile: "+91 98765 40174", email: "maya.patel@example.com", active: true },
  { name: "Jasper Clark", age: 38, years: 7, country: "Australia", mobile: "+61 412 345 175", email: "jasper.clark@example.com", active: true },
  { name: "Elise Laurent", age: 22, years: 1, country: "France", mobile: "+33 6 12 34 01 76", email: "elise.laurent@example.com", active: true },
  { name: "Ramon Bautista", age: 46, years: 9, country: "Philippines", mobile: "+63 917 555 0177", email: "ramon.bautista@example.com", active: true },
  { name: "Aisha Khan", age: 32, years: 4, country: "South Africa", mobile: "+27 82 555 0178", email: "aisha.khan@example.com", active: true },
  { name: "Erik Johansson", age: 57, years: 11, country: "Sweden", mobile: "+46 70 555 0179", email: "erik.johansson@example.com", active: true },
  { name: "Camille Dubois", age: 35, years: 5, country: "Canada", mobile: "+1 (202) 555-0180", email: "camille.dubois@example.com", active: true },
  { name: "Riku Sato", age: 43, years: 8, country: "Japan", mobile: "+81 90 5555 0181", email: "riku.sato@example.com", active: true },
  { name: "Nora Jensen", age: 28, years: 3, country: "Singapore", mobile: "+65 8123 0182", email: "nora.jensen@example.com", active: true },
  { name: "Mateo Herrera", age: 39, years: 7, country: "Mexico", mobile: "+52 55 5555 0183", email: "mateo.herrera@example.com", active: true },
  { name: "Grace Miller", age: 31, years: 4, country: "United States", mobile: "+1 (202) 555-0184", email: "grace.miller@example.com", active: true },
  { name: "Daniel Costa", age: 44, years: 8, country: "Portugal", mobile: "+351 912 345 185", email: "daniel.costa@example.com", active: true },
  { name: "Hye-jin Choi", age: 27, years: 2, country: "South Korea", mobile: "+82 10 5555 0186", email: "hyejin.choi@example.com", active: true },
  { name: "Sienna Taylor", age: 52, years: 10, country: "United Kingdom", mobile: "+44 7700 900187", email: "sienna.taylor@example.com", active: true },
  { name: "Noel Garcia", age: 34, years: 5, country: "Spain", mobile: "+34 612 345 188", email: "noel.garcia@example.com", active: true },
  { name: "Lourdes de la Cruz", age: 60, years: 12, country: "Philippines", mobile: "+63 917 555 0189", email: "lourdes.delacruz@example.com", active: true },
  { name: "Mara Flores", age: 36, years: 6, country: "Philippines", mobile: "+63 917 555 0190", email: "mara.flores@example.com", active: true },
];

const workTitles = [
  "Teacher",
  "Software engineer",
  "Small business owner",
  "Healthcare professional",
  "Marketing manager",
  "Accountant",
  "Graphic designer",
  "Project manager",
  "Sales consultant",
  "Civil engineer",
  "University lecturer",
  "Product designer",
  "Financial analyst",
  "Restaurant owner",
  "Nurse",
  "Architect",
  "Human resources manager",
  "Photographer",
  "Operations manager",
  "Attorney",
];

customers.forEach((customer, index) => {
  customer.work = customer.name === "Alex Morgan" ? "Real estate investor" : workTitles[index % workTitles.length];
  customer.email = customer.email.replace("@example.com", "@gmail.com");
});

const avatarColors = [
  ["#edf1e8", "#63765d"],
  ["#f2ece7", "#8a6f59"],
  ["#e9eff0", "#647e80"],
  ["#f1ebf1", "#816f83"],
  ["#f3efe3", "#887b54"],
  ["#e9eee9", "#5e7768"],
];

const rows = document.querySelector("#customer-rows");
const sortFilter = document.querySelector("#sort-filter");
const countryFilter = document.querySelector("#country-filter");
const emptyState = document.querySelector("#empty-state");
const table = document.querySelector("table");

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

function createCell(text, className = "") {
  const cell = document.createElement("td");
  cell.textContent = text;
  if (className) cell.className = className;
  return cell;
}

function renderCustomers() {
  const selectedCountry = countryFilter.value;
  const [sortKey, sortDirection] = sortFilter.value.split("-");
  const direction = sortDirection === "asc" ? 1 : -1;
  const matchingCustomers = customers
    .filter((customer) => !selectedCountry || customer.country === selectedCountry)
    .sort((a, b) => {
      const comparison = sortKey === "age"
        ? a.age - b.age
        : a.name.localeCompare(b.name);
      return comparison * direction;
    });

  rows.replaceChildren();

  for (const [index, customer] of matchingCustomers.entries()) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const customerCell = document.createElement("div");
    const avatar = document.createElement("span");
    const name = document.createElement("span");
    const [avatarBackground, avatarForeground] = avatarColors[index % avatarColors.length];

    customerCell.className = "customer-cell";
    avatar.className = "customer-avatar";
    avatar.textContent = initials(customer.name);
    avatar.style.backgroundColor = avatarBackground;
    avatar.style.color = avatarForeground;
    name.className = "customer-name";
    name.textContent = customer.name;
    customerCell.append(avatar, name);
    nameCell.append(customerCell);
    row.append(
      nameCell,
      createCell(String(customer.age)),
      createCell(`${customer.years} ${customer.years === 1 ? "year" : "years"}`),
      createCell(customer.country, "customer-country"),
      createCell(customer.work),
      createCell(customer.mobile),
      createCell(customer.email, "customer-email"),
    );
    rows.append(row);
  }

  emptyState.hidden = matchingCustomers.length !== 0;
  table.hidden = matchingCustomers.length === 0;
}

const countries = [...new Set(customers.map((customer) => customer.country))].sort((a, b) =>
  a.localeCompare(b),
);
const countryOptions = document.createDocumentFragment();

for (const country of countries) {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countryOptions.append(option);
}

countryFilter.append(countryOptions);

countryFilter.addEventListener("change", renderCustomers);
sortFilter.addEventListener("change", renderCustomers);
document.querySelector("#clear-filters").addEventListener("click", () => {
  countryFilter.value = "";
  renderCustomers();
});

renderCustomers();
