import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from '@mui/icons-material/Search';

function NavBar({onChange, search}) {

  
  return (
    <div className="sticky top-0 bg-white z-10 mb-2">
      <nav className="flex justify-between px-10px py-30px">
        <section className="flex items-center pl-12">
          <div>
            <img
              className="max-w-20 -mx-4"
              src="../images/dog_logo.jpg"
              alt="website-logo"
            />
          </div>
          <div className="flex p-6 [&>div]:px-6 [&>div>a]:py-6">
            <div>
              <a className="hover:border-b-4 border-[#FE5502] cursor-pointer">
                Dogs
              </a>
            </div>
            <div>
              <a className="hover:border-b-4 border-[#FE5502] cursor-pointer">
                Adopt
              </a>
            </div>
            <div>
              <a className="hover:border-b-4 border-[#FE5502] cursor-pointer">
                Find a Foster Home
              </a>
            </div>
            <div>
              <a className="hover:border-b-4 border-[#FE5502] cursor-pointer">
                Articles
              </a>
            </div>
          </div>
          
        </section>
        
        <div className="flex items-center pr-9 [&>*]:px-2">
        <div id="searchBar" className="h-10 w-96 mx-4 rounded-2xl flex justify-around items-center bg-gray-100">
            <SearchIcon/>
            <input type="text" className="w-80 mr-2 rounded-2xl px-4" placeholder="Search..." value={search} onChange={onChange}/>
          </div>
          <Link to="/checkout">
            <IconButton color="dark">
              <ShoppingCartIcon />
            </IconButton>
          </Link>
          <div>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </div>
        </div>
      </nav>
      <hr className="mx-28 my-0 opacity-65 border-solid outline-slate-700"></hr>
    </div>
  );
}

export default NavBar;
