function autocomplete(input, latInput, lngInput) {
  // skip this function from running if there is no input on the page
  if (!input) return;
  const dropDown = new google.maps.places.AutoComplete(input);
}

export default autocomplete;
