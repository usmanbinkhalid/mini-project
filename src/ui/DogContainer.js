import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

function DogContainer({ data: { name, allImages } }) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center h-96 w-80 overflow-hidden rounded-2xl shadow-xl m-3 hover:scale-105">
      <Link to={`/dog/${name}`}>
        <img
          src={allImages[0]}
          className="h-72 w-80 object-cover"
          alt={`This is the photo of a ${name} dog`}
        />
      </Link>
      <div className="w-full h-10 flex justify-center items-center">
        {name[0].toUpperCase() + name.substring(1)}
      </div>
      <div className="flex justify-center items-center w-72">
        {count > 0 ? (
          <div className="flex justify-between items-center w-6/12 bg-gray-100 rounded content-center px-2">
            <IconButton
              onClick={() => {
                setCount((n) => n - 1);
              }}
            >
              <RemoveIcon />
            </IconButton>
            {count}
            <IconButton
              onClick={() => {
                setCount((n) => n + 1);
              }}
            >
              <AddIcon />
            </IconButton>
          </div>
        ) : (
          <Button
            variant="contained"
            color="siteYellow"
            fullWidth
            onClick={() => {
              setCount((n) => n + 1);
              console.log("Added");
            }}
          >
            <PetsIcon />
            Adopt
          </Button>
        )}
      </div>
    </div>
  );
}

export default DogContainer;
