import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import NavBar from "./NavBar";
import { IconButton } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import DogCarousel from "./DogCarousel";

function Dog() {
  const { name } = useParams();
  const [count, setCount] = useState(0);
  const LIMIT_CAROUSEL = 6;
  const GET_DOG_QUERY = gql`
  {
  breed (name: "${name}"){
    name
    allImages(limit: ${LIMIT_CAROUSEL})
  }
}
`;
  const { data, loading, error } = useQuery(GET_DOG_QUERY);

  if (loading) return "Loading...";
  if (error) {
    return <pre>{error.message}</pre>;
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-center mt-20">
        <DogCarousel breed={data.breed} />
        <div className="w-[600px] flex justify-end">
          <div className="w-[500px] flex flex-col justify-between my-10">
            <div>
              <div className="text-s text-yellow-700 font-bold py-5">
                Dogify
              </div>
              <div className="text-5xl font-black">
                {name[0].toUpperCase() + name.substring(1)}
              </div>
            </div>
            <p>
              The dog is a mammal with sharp teeth, an excellent sense of smell,
              and a fine sense of hearing. Each of its four legs ends in a foot,
              or paw, with five toes. Each toe has a soft pad and a claw. A coat
              of hair keeps the dog warm. It cools off by panting and hanging
              its tongue out of its mouth.
            </p>
            <div className="flex w-full h-12">
              <div className="flex justify-between items-center w-6/12 bg-gray-100 rounded mr-3 content-center px-2">
                <IconButton onClick={() => {
                  setCount(n => n-1);
                }} disabled={count === 0}>
                  <RemoveIcon />
                </IconButton>
                {count}
                <IconButton onClick={() => {
                  setCount(n => n + 1)
                }}>
                  <AddIcon />
                </IconButton>
              </div>
              <Button variant="contained" color="siteYellow" fullWidth>
                <PetsIcon />
                Adopt
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dog;
