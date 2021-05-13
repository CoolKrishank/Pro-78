var images = ["Screenshot (343).png" , "Screenshot (344).png", "https://i.pinimg.com/564x/00/9c/0e/009c0e961c10fff2b31aff3ff6ed6263.jpg",
"hi.png"];
var names = ["Family Book","Krishank (Me)", "Uttam (My father)", "Aaraina  (Sister)", "Tajinder (My Mother)"];
var i = 0;
function update()
{
i++;
var numbers_of_family_member_in_array = 4
if(i > numbers_of_family_member_in_array )
{
i = 0;
}
var updatedImage = images[i];
var updatedName  = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}