function AddUser(){
    user_name=document.getElementById("User_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="index2.html"
}