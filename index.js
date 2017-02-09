$( "#sendEmail" ).submit(function() {
  const emailDetails =
    'mailto:sabrinatee@me.com' +
    '?subject=Inquiry from: ' + $( "#first_name" ).val() + ' ' + $( "#last_name" ).val() +
    '&body=' + $( "#message" ).val() + 'Sent from: ' + $( "#email" ).val();
  window.open(emailDetails);
});
