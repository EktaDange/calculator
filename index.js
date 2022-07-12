function display(value)
{
  document.getElementById("textarea").value+=value;
}

function clear()
{
    document.getElementById("textarea").value=" "
}

function calculate()
{
    var value=document.getElementById("textarea").value
    var answer=eval(value)
    document.getElementById("textarea").value=answer
}