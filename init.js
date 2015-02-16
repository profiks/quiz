var init = [];
$.ajax({
  url: 'package.json',
  async: false,
  dataType: 'json',
  success: function (json) {
    init = json.questions;
  }
});
