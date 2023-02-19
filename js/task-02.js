const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsNew = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  ingredientsNew.append(item);
}
