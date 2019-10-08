//user should be able to enter the items they need to purchase by entering text and hitting "return" or by clicking "add item" button
//
// check and uncheck the items on the list by clicking the "check" button
//
// permanently remove items from the List

//Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().


$(document).ready(function() {
  //on the click of the delete button, find the nearest list item, and remove it.
  $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
    $(this).closest('li').remove();
  });

  //on the click of the check button, target the specific event, and then find the closest list item, and find the item that is in that list item, and toggle the css class provided for toggleClass.
  $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
});

//convert this to another function that runs on the page load
$(function submitItem(){
  $('#js-shopping-list-form').submit(function(event){
    //prevent reload after the submission
    event.preventDefault();
    const newItem = $('#shopping-list-entry').val();
    //this just resets the addition to an empty string so you can add more items
    $('#shopping-list-entry').val('');
    //add on the same html from the other sections, just change out the name to the saved variable
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });
  //when the window loads, run this function. But I can't have it run when the window is loaded, it needs to be present to be used after the page is loaded


});
