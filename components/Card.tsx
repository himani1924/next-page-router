"use client";
import React from "react";

interface CardProps {
    id: number,
    name: string,
    category: string,
    description: string,
    ratings: number
}
const Card: React.FC<CardProps> = ({
  name,
  category,
  description,
  ratings,
}) => {
  return (
    <div>
      <div className="card-container border-2 border-gray-800 w-[400] h-[350] flex flex-col items-center justify-center p-10 text-center gap-y-10">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>Category: {category}</p>
        <p>Price: ${description}</p>
        <p>Rating: {ratings}/5</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
