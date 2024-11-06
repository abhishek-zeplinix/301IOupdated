let navbarHtml = `
<div class="container">
            <div class="row d-flex py-4 my-2 justify-content-between">

                <div class="col-auto col-lg-4 d-flex d-lg-none align-items-center justify-content-center order-1">
                    <div class="dropdown " style="z-index: 3;">

                        <button type="button" class="btn pink-btn br-2 btn dropdown-toggle d-flex align-items-center"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6 class="p-2 fw-6">
                                Explore
                            </h6>
                        </button>
                        <ul class="dropdown-menu py-2" style="margin-left: 15px;padding: 0px;">
                            <li class="nav-item ">
                                <a class="nav-link  active" aria-current="page" href="#">
                                    <h6 class="logIn p-3">
                                        Home
                                    </h6>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link  active" aria-current="page" href="#">
                                    <h6 class="logIn p-3">
                                        Product
                                    </h6>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link  active" aria-current="page" href="#">
                                    <h6 class="logIn p-3">
                                        Services
                                    </h6>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link  active" aria-current="page" href="#">
                                    <h6 class="logIn p-3">
                                        About Us
                                    </h6>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link  active" aria-current="page" href="#">
                                    <h6 class="logIn p-3">
                                        Contact
                                    </h6>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block d-flex align-items-center justify-content-center px-0">
                    <ul style="list-style-type: none;"
                        class="d-flex h-100 align-items-center justify-content-between w-100 ps-0 mb-0">
                        <li class="">
                            <a href="#">
                                <h6>Home</h6>
                            </a>
                        </li>
                        <li class="">
                            <a href="#">
                                <h6>Product</h6>
                            </a>
                        </li>
                        <li class="">
                            <a href="#">
                                <h6>Service</h6>
                            </a>
                        </li>
                        <li class="">
                            <a href="#">
                                <h6>About Us</h6>
                            </a>
                        </li>
                        <li class="">
                            <a href="#">
                                <h6>Contact</h6>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col-lg-4 d-flex align-items-center justify-content-center order-0 pb-4 pb-lg-0">
                    <a href="#">
                        <img src="./images/general/301io.png" alt="Logo" width="120">
                    </a>
                </div>

                <div class="col-auto col-lg-4 d-flex align-items-center
                justify-content-center justify-content-lg-end order-2">
                    <a href="" class="d-none d-lg-block">
                        <h6 class="logIn me-2">
                            Log In
                        </h6>
                    </a>
                    <a href="">
                        <button type="button" class="btn pink-btn br-2 ms-md-4">
                            <h6 class="p-2 fw-6">
                                Let's Talk
                            </h6>
                        </button>
                    </a>
                </div>
            </div>
        </div>
`;

let footerHtml = `
<div class="container">
            <div class="row d-flex justify-content-evenly px-2 py-5">
                <div
                    class="col-lg-3 mb-4 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                    <p class="fw-5 text-center text-lg-start">
                        <span class="pink">301io</span> gives you the blocks and components you need to create a truly
                        professional website.
                    </p>
                    <div class="socialMedia pt-5">
                        <div>
                            <i class="fa-brands fa-twitter "></i>
                        </div>
                        <div class="ms-3">
                            <i class="fa-brands fa-facebook-f "></i>
                        </div>
                        <div class="ms-3">
                            <i class="fa-brands fa-instagram "></i>
                        </div>
                        <div class="ms-3">
                            <i class="fa-brands fa-github "></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 text-center text-lg-start">
                    <ul>
                        <li>
                            <h6 class="pink fw-7 pb-2">
                                Company
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Home
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Product
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Service
                            </h6>
                        </li>
                        <li>
                            <h6>
                                About Us
                            </h6>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 text-center text-lg-start">
                    <ul>
                        <li>
                            <h6 class="pink fw-7 pb-2">
                                Help
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Customer Support
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Delivery Details
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Terms And Conditions
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Privacy Policy
                            </h6>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 text-center text-lg-start">
                    <ul>
                        <li>
                            <h6 class="pink fw-7 pb-2">
                                Resources
                            </h6>
                        </li>
                        <li>
                            <h6>
                                News
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Event
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Careers
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Site Map
                            </h6>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-12 py-5">
                    <h6 class="text-center">
                        © Copyright 2024, All Rights Reserved by 301io
                    </h6>
                </div>
            </div>
        </div>
`;

let contactUsModalhtml = `
    <!-- Modal -->
    <div class="modal fade" id="scheduleCall" tabindex="-1" aria-labelledby="scheduleCallLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered ">
            <div class="modal-content bg-transparent border-0">
                <div class="modal-body ">
                    <div class="container" id="contactUsModal">
                        <div class="row">
                            <div class="col-lg-12 mx-auto bg-white br-6 px-5 pb-4 pt-5">
                                <div class="row g-5">
                                    <div class="col-lg-6">
                                        <h5 class="grey-3 pt-3">
                                            Contact Us
                                        </h5>
                                        <h2 class="pink py-3">
                                            Have an project in mind?
                                        </h2>
                                        <h6 class="grey-3" style="line-height: 1.5;">
                                            The right move at the right time saves your investment. live the dream of
                                            expanding your
                                            business.
                                        </h6>

                                        <img class="mt-4 br-6" src="./images/general/contactUs.png" width="100%" alt=""
                                            style="box-shadow: 0 8px 16px 0 #0000001A;">
                                    </div>
                                    <div class="col-lg-6 d-flex flex-column justify-content-center align-items-end jus">

                                        <button type="button" class="btn-close grey-5 bg-pink-2 br-2 p-3"
                                            data-bs-dismiss="modal" aria-label="Close"></button>

                                        <form action="" id="form_Modal" method="post">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="name" class="pt-3 pb-2">
                                                        <h6>
                                                            Name *
                                                        </h6>
                                                    </label>
                                                    <input type="text" class="form-control" name="name" id="name"
                                                        required="">
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="email" class="pt-3 pb-2">
                                                        <h6>
                                                            Email ID *
                                                        </h6>
                                                    </label>
                                                    <input type="text" class="form-control" name="email" id="email"
                                                        required="">
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="subject" class="pt-4 pb-2">
                                                        <h6>
                                                            Subject
                                                        </h6>
                                                    </label>
                                                    <input type="text" class="form-control" name="subject" id="subject"
                                                        required="">
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="phone" class="pt-4 pb-2">
                                                        <h6>
                                                            Phone Number
                                                        </h6>
                                                    </label>
                                                    <input type="text" class="form-control" name="phone" id="phone"
                                                        required="">
                                                </div>
                                                <div class="col-12">
                                                    <label for="phone" class="pt-4 pb-2">
                                                        <h6>
                                                            Your Message
                                                        </h6>
                                                    </label>
                                                    <textarea type="text" rows="5" class="form-control" name="phone"
                                                        id="phone" required="">
                                                    </textarea>
                                                </div>
                                                <div class="col-12 py-5">
                                                    <div class="row d-flex align-items-center">
                                                        <div class="col-md-5 h-100 mb-3">
                                                            <p for="phone">
                                                                <u class="pink">Terms & Conditions</u> - Loreum ipsum
                                                                dummetext
                                                                herre
                                                                live the ....
                                                            </p>
                                                        </div>
                                                        <div class="col-md-7 h-100 d-flex justify-content-end">
                                                            <button type="button" class="btn pink-btn br-9 px-5 py-3">
                                                                <h5 class="roboto fw-5">
                                                                    Send Message
                                                                </h5>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

let scheduleCallNowhtml = `
    <div class="bg-pink py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 d-flex align-items-center justify-content-center justify-content-md-start">
                        <h4 class="text-white text-center text-md-start">
                            Got a Project for us Loreum ipsum dummy text here?
                        </h4>
                    </div>
                    <div class="col-md-5 pt-4 pt-md-0 d-flex align-items-center justify-content-center justify-content-md-end">
                        <div>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#scheduleCall"
                                class="btn white-btn br-9 px-5 py-3">
                                <h5 class="roboto fw-5">
                                    Schedule Call
                                </h5>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

document.querySelector('nav').innerHTML = navbarHtml;
document.querySelector('footer').innerHTML = footerHtml;
document.querySelector('body').innerHTML += contactUsModalhtml;
document.querySelector('#scheduleCallNow').innerHTML = scheduleCallNowhtml;