function Show()
{
var2 = new Date();
document.getElementById('Time').innerHTML = moment(var2).format("HH:mm:ss:SS");
document.getElementById('Date').innerHTML = moment(var2).format("dddd, MMMM Do YYYY");
document.getElementById('Week').innerHTML = moment(var2).format("Wo [Week of the Year]");
//document.getElementById('Time').innerHTML = moment(var2).format("HH:mm:ss:SS");
}
setInterval(Show, 10);