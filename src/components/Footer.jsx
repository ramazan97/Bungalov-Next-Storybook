import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer class="">
        <div class="">
          <div class="">
            <div class="">
              <h5 class="">LOGO</h5>
            </div>

            <div class="">
              <h5 class="">Products</h5>
              <p>
                <Link className="" href={"/"}>
                  home{" "}
                </Link>
              </p>
              <p>
                <Link className="" href="#about">
                  about{" "}
                </Link>
              </p>
              <p>
                <Link className="" href="#bungalov">
                  bungalov{" "}
                </Link>
              </p>
              <p>
                <Link className="" href="#blog">
                  blog{" "}
                </Link>
              </p>
            </div>

            <div class="">
              <h5 class="">Contact</h5>

              <p>
                <i class=""></i> Sakarya, Sapanca
              </p>
              <p>
                <i class=""></i> sapancabungalov@gmail.com
              </p>
              <p>
                <i class=""></i> (555) 555 55 55
              </p>
            </div>
          </div>

          <hr class="" />

          <div class="">
            <div class="">
              <p>
                Copyrgiht ©2020 All rights reserved by:
                <Link className="" href={"/"}>
                  <strong className=""> The Providers</strong>
                </Link>
                {/* <a href="#" style="text-decoration: none">
                <strong class="text-warning"> The Providers</strong>
              </a> */}
              </p>
            </div>

            <div class="">
              <div class="">
                <ul class="">
                  <li class="">
                    <Link className="" href={"/"}>
                      <i class=""></i>
                    </Link>

                    {/* <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style="font-size: 23px"
                  >
                    
                  </a> */}
                  </li>

                  <li class="">
                    <Link className="" href={"/"}>
                      <i class=""></i>
                    </Link>

                    {/* <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style="font-size: 23px"
                  >
                    <i class="fab fa-twitter"></i>
                  </a> */}
                  </li>

                  <li class="">
                    <Link className="" href={"/"}>
                      <i class=""></i>
                    </Link>
                    {/* <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style="font-size: 23px"
                  >
                    <i class="fab fa-google-plus"></i>
                  </a> */}
                  </li>

                  <li class="">
                    <Link className="" href={"/"}>
                      <i class=""></i>
                    </Link>
                    {/* <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style="font-size: 23px"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a> */}
                  </li>

                  <li class="">
                    <Link className="" href={"/"}>
                      <i class=""></i>
                    </Link>
                    {/* <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style="font-size: 23px"
                  >
                    <i class="fab fa-youtube"></i>
                  </a> */}
                  </li>

                  <li class="">
                    <Link className="" href={"/"}>
                      <i class=""></i>
                    </Link>
                    {/* <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style="font-size: 23px"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
