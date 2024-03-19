{
    {
        {
            {
                //Possui escopo em funções e global caso não esteja em uma função
                var sera = "Será?"
            }
        }
    }
}

console.log(sera);

function teste() {
    var local = 123;

    console.log(local);
}

teste();

console.log(local);