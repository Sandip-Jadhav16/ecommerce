import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, IconButton } from "@mui/material";

export const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/p/l/v/34-mendoublenew-tenit-original-imahynwzuqcjqkth.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men semi Rise Black</p>
          <p className="opacity-70">Size:L,White</p>
          <p className="opacity-70 mt-2">Sellar: Cristan Fashion</p>
          <div className="flex space-x-5 items-center  textgray-900 pd-6">
            <p className="font-semibold">₹265</p>
            <p className="opacity-50 line-through">₹1,999</p>
            <p className="text-green-600 font-semibold">86% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex tems-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>

          <div>
            <Button sx={{ color: "RGB(145 85 253)" }}>remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
