import React from "react";
import Recipe from "../../components/Recipe/recipe.component";
import Menu from "../../components/Menu/menu.component";
import FoodItems from "../../components/Items/food-items.component";
import Newsletter from "../../components/Newsletter/newsletter.component";
import FooterSection from "../../components/Footer-section/footer-section.component";

const RecipePage = () => {
  return (
    <>
      <Recipe />
      <Menu />
      <FoodItems />
      <Newsletter />
      <FooterSection />
    </>
  );
};

export default RecipePage;
