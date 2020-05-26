/**********
 * UI Controller 
·**********
*/

const DOMstrings = {
  value: ".card__value",
  cards: [
    "code",
    "altKey",
    "ctrlKey",
    "isComposing",
    "key",
    "locale",
    "location",
    "metaKey",
    "repeat",
    "shiftKey",
  ],
};

export function updateCardInformation(e) {
  DOMstrings.cards.forEach((cardName) => {
    let name = `.card--${cardName}`;
    let eventInfo = e[cardName];
    let element = document.querySelector(name);

    if (eventInfo === undefined) {
      eventInfo = "empty";
    }

    if (element) {
      element.querySelector(DOMstrings.value).textContent = eventInfo;
    }
  });
}