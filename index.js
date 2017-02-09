$( "#sendEmail" ).submit(function() {
  const emailDetails =
    'mailto:' + $( "#email" ).val() +
    '?subject=Inquiry from: ' + $( "#first_name" ).val() + ' ' + $( "#last_name" ).val() +
    '&body=' + $( "#message" ).val()
  window.open(emailDetails);
});
