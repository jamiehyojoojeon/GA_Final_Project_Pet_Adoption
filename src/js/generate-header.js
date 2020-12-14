const header = document.getElementById('header');
const root = "http://" + window.location.host + "/pet-adoption/";

header.innerHTML = `<div class="logo">
                        <a href="${root}index.html">
                        <img src="${root}css/images/logo-ahs.png" alt="">
                        </a>
                        </div>
                        <div class="mobile-menu" id="mobile-menu">
                        <i class="fas fa-bars"></i>
                    </div>
                        <nav class="menu" id="top-nav">
                        <ul class="menu-ul">
                        <li>
                            <a href="${root}adopt/adopt-pet/index.html"> ADOPT</a>
                            <ul class="dropdown-menu dropdown-menu-1">
                            <li>
                                <a href="${root}adopt/adopt-pet/index.html"> Pet Adoption</a>
                            </li>
                            <li>
                                <a href="${root}adopt/adoption-process/"> Adoption Process</a>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a href="${root}pet-service/spray-neuter/"> SERVICES
                            </a>
                            <ul class="dropdown-menu dropdown-menu-2">
                            <li>
                                <a href="${root}pet-service/spray-neuter/"> Spray and Neuter
                                </a>
                            </li>
                            <li>
                                <a href="${root}pet-service/dog-training/"> Dog Training
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a href="${root}about-us/"> ABOUT US
                            </a>
                        </li>
                        <li>
                            <a href="${root}contact/"> CONTACT
                            </a>
                        </li>
                        </ul>
                        </nav>`