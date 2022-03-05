// let checkk = confirm( "Are you graduated student up 21 years old !?" );
// if ( checkk === false )
// {
//     document.getElementById( "body" ).style.display = "none";
// }
function dat() {
    let dValue = document.getElementById( "date" ).value;
    if ( dValue == "" )
    {
        document.getElementById( "txt" ).innerHTML = "Sorry You Must Be Enter A Number";
    }
    else if ( 2022 - Number( dValue ) < 18 )
    {
        if (2022 - Number(dValue) <= 0) {
            document.getElementById( "txt" ).innerHTML = "Sorry you Enter A Wrong number";
        }
        else
        {
            document.getElementById( "txt" ).innerHTML = "Sorry your age < 18 years Old";
        }
    }
    else
    {
        document.getElementById( "txt" ).innerHTML = "";
        document.getElementById( "Gpa" ).classList.remove("cont2");
    }   

};

function GPA() {
    let gpa = Number(document.getElementById( "GPa" ).value);
    if (gpa <= 4 && gpa >= 3.5){
        document.getElementById( "txt1" ).innerHTML = "A+";
    }
    else if(gpa < 3.5 && gpa >= 3){
        document.getElementById( "txt1" ).innerHTML = "A";
    }
    else if(gpa < 3 && gpa >= 2.5){
        document.getElementById( "txt1" ).innerHTML = "B+";
    }
    else if( gpa < 2.5 && gpa >= 2.3){
        document.getElementById( "txt1" ).innerHTML = "B";
    }
    else if( gpa < 2.3 && gpa >= 2){
        document.getElementById( "txt1" ).innerHTML = "C+";
    }
    else if( gpa < 2 && gpa >= 1.5){
        document.getElementById( "txt1" ).innerHTML = "C";
    }
    else{
        document.getElementById( "txt1" ).innerHTML = "You Number is Wrong";
    }
};

function day() {
    let dat = document.getElementById( "dd" ).value;
    let x = new Date(dat).getDay();S
    switch (x) {
        case 6:
            document.getElementById( "txt2" ).innerHTML = "Saturday";
            break;
        case 0:
            document.getElementById( "txt2" ).innerHTML = "Sunday";
            break;
        case 1:
            document.getElementById( "txt2" ).innerHTML = "Monday";
            break;
        case 2:
            document.getElementById( "txt2" ).innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById( "txt2" ).innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById( "txt2" ).innerHTML = "Thursday";
            break;
        default:
            document.getElementById( "txt2" ).innerHTML = "Friday";
            break;
    }
}

function imgHide()
{
    let m = document.querySelectorAll( 'img' );
    let v = document.querySelectorAll( 'button' ); 
    for (let index = 0;index < 6; index++) {
        m[ index ].setAttribute( 'id', `${ index }` );
    }
    for ( let i = 0; i < 6; i++ )
    {
        v[ i ].setAttribute( 'id', `${ i }` );
    
        v[i].onclick = function ()
        {
        if ( document.getElementById( `${i}` ).getAttribute( "id" ) === document.getElementById(`${i}`).        getAttribute("id")) {
            m[ i ].classList.toggle( "show" );
            if ( v[ i ].innerText === "Show" )
            {
                v[i].innerText = "Hide";
            } else
            {
                v[i].innerText = "Show";
            }
            
            }
        }
    }
};


