import React, { useEffect, useState } from "react";
import DogContainer from "../ui/DogContainer";
import { useQuery, gql } from "@apollo/client";
import DogContainerSkeleton from "../skeletons/DogContainerSkeleton";
import { useLocation } from "react-router-dom";

const DOG_QUERY = gql`
  {
    allBreeds {
      name
      allImages(limit: 1)
    }
  }
`;

function Home() {
  const [searchField, setSearchField] = useState("");
  const { data, loading, error } = useQuery(DOG_QUERY);
  let { search } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search);
    setSearchField(query.get("dog"));
  }, [search]);

  if (loading) return <DogContainerSkeleton />;
  if (error) {
    return <pre>{error.message}</pre>;
  }

  let filteredBreeds = data.allBreeds.filter((breed) =>
    breed.name.includes(searchField)
  );

  if (!searchField) {
    filteredBreeds = data.allBreeds;
  }

  if(!filteredBreeds.length){
    return(<div>Oops.., No Result found.</div>)
  }

  return (
    <div className="flex flex-wrap">
      {filteredBreeds.map((breed) => (
        <DogContainer data={breed} key={breed.name} />
      ))}
    </div>
  );
}

export default Home;
