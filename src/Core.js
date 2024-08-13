import React from "react";
import { useReducer } from "react";
import DogContainer from "./DogContainer";
import { useQuery, gql } from "@apollo/client";

const DOG_QUERY = gql`
  {
    allBreeds {
      name
      allImages(limit: 1)
    }
  }
`;

export const ACTIONS = {
  ADD_DOG: "add_dog",
  REMOVE_DOG: "remove_dog",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_DOG: {
      console.log("added", state, action);
      return [
        ...state,
        {
          id: action.id,
          count: action.count + 1,
        },
      ];
    }
    case ACTIONS.REMOVE_DOG: {
      console.log("removed", state, action);
      if (action.count === 1) {
        return state.filter((dog) => {
          dog.id !== action.id;
        });
      }

      return state.map((dog) => {
        if (dog.dogName === action.dogName) {
          return { id: action.id, count: action.count - 1 };
        }
        return { dog };
      });
    }
  }
}

function Core() {
  const [state, dispatch] = useReducer(reducer, []);
  const { data, loading, error } = useQuery(DOG_QUERY);

  if (loading) return "Loading...";
  if (error) {
    return <pre>{error.message}</pre>;
  }
  return (
    <div className="flex flex-wrap justify-evenly">
      {data.allBreeds.map((breed) => {
        return (
          <DogContainer
            data={breed}
            key={breed.name}
          />
        );
      })}
    </div>
  );
}

export default Core;
