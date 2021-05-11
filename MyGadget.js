function Show()
{
var2 = new Date();
document.getElementById('DateTime').innerHTML = var2;
}
setInterval(Show, 1000);