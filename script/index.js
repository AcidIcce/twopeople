
(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "https://vk.com/js/api/openapi.js?162"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));
(function() {
  if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post('vk_post_-106348257_543', -106348257, 543, 'M7l8eZA2roru4wnbs1wJ7YFJ_o4v')) setTimeout(arguments.callee, 50);
}());

var n = 0;
function menu_func() {
  let menu = document.getElementById('menu');
  if (n == 1) {
    menu.style.display = 'none';
    return n = 0;
  } else {
    menu.style.display = 'block';
  }
  return n++;
}