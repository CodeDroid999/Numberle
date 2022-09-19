function Prime()
{
    var i,flag=0,number;
    number= Number(document.getElementById("N").value);

    for(i=2;i<=number/2;i++)
    {
        if(number%2==0)
        {
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        window.alert(number+" is not a prime number");
    }
    else
    {
        window.alert(number+" is a prime number");
    }
}