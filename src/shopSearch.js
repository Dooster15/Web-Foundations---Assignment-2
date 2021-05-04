// A javascript function that takes the input from user in the form of an input box and removes any <a> tags that dont contain any simular letters. This will form the search funciton
function filterSearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("shopSearch");
    filter = input.value.toUpperCase();
    div = document.getElementById("searchContainer");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        } else {
        a[i].style.display = "none";
        }
    }
}
// Sources used:
// How TO - Clickable Dropdown(no date) W3Schools. Available from: https://www.w3schools.com/howto/howto_js_dropdown.asp [Accessed 04 May 2021].



