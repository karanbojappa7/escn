  
import React from 'react';
import her from './her.jpg'

function About() {
  return (
    <div >
      <h1> About Page</h1>
      <img className="herbimg" src={her} />
      <p className="herb">
      In general use, herbs are plants with savory or aromatic properties that are used for flavoring and garnishing food, for medicinal purposes, or for fragrances; excluding vegetables and other plants consumed for macronutrients. Culinary use typically distinguishes herbs from spices. Herbs generally refers to the leafy green or flowering parts of a plant (either fresh or dried), while spices are usually dried and produced from other parts of the plant, including seeds, bark, roots and fruits.
      </p>
    </div>
  );
}
export default About;