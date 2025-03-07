const Nav_Dashboard = document.getElementById("nav-dashboard");
const Nav_About = document.getElementById("nav-about");
const Nav_Certificate = document.getElementById("nav-certificate");
const Nav_Contact = document.getElementById("nav-contact");

const Dashboard_Body = document.getElementById("dashboard-body");
const About_Body = document.getElementById("about-body");
const Certificate_Body = document.getElementById("certificate-body");
const Contact_Body = document.getElementById("contact-body");

const nav_checked = "rgb(233, 66, 25)";
const aliceblue = "rgb(240, 248, 255)";

function nav_flush(){
    Nav_Dashboard.style.color = aliceblue;
    Nav_About.style.color = aliceblue;
    Nav_Certificate.style.color = aliceblue;
    Nav_Contact.style.color = aliceblue;

    Dashboard_Body.style.display = "none";
    About_Body.style.display = "none";
    Certificate_Body.style.display = "none";
    Contact_Body.style.display = "none";
}

Nav_Dashboard.addEventListener("click",()=>{
    nav_flush();
    Nav_Dashboard.style.color = nav_checked;
    Dashboard_Body.style.display = "block";
});
Nav_About.addEventListener("click",()=>{
    nav_flush();
    Nav_About.style.color = nav_checked;
    About_Body.style.display = "block";
});
Nav_Certificate.addEventListener("click",()=>{
    nav_flush();
    Nav_Certificate.style.color = nav_checked;
    Certificate_Body.style.display = "block";
});
Nav_Contact.addEventListener("click",()=>{
    nav_flush();
    Nav_Contact.style.color = nav_checked;
    Contact_Body.style.display = "block";
});