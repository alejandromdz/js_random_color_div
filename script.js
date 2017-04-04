function changeColor()
{
    var div=document.getElementById('random')
    var values = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += values[Math.floor(Math.random() * 16)];
    }    
    div.style.background=color;
}