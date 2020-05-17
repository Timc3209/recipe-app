import { RecipeState } from "../redux/types";
import { v4 as uuidv4 } from "uuid";

export const TacoRecipe: RecipeState = {
  id: uuidv4(),
  url: "",
  title: "Beef Tacos",
  ingredients: [
    "1 pound ground beef",
    "1 cup salsa",
    "10 taco shells",
    "1/2 head lettuce",
    "1 medium tomato",
    "1 cup shredded cheese",
  ],
  directions: [
    "Cook beef in 10-inch skillet over medium heat 8 to 10 minutes. stirring occasionally until brown",
    "Stir salsa into beef. Heat to boiling stirring constantly; reduce heat to medium-low. Cook 5 minutes stirring occasionally. Pour beef mixture into large serving bowl.",
    "Heat taco shells as directed on package. Serve taco shells with beef mixture lettuce tomato and cheese.",
  ],
};

export const EnchiladaRecipe: RecipeState = {
  id: uuidv4(),
  url: "",
  title: "Beef Enchiladas",
  ingredients: [
    "1 pound ground beef",
    "1 can red enchilada sauce",
    "1 can chopped green chiles",
    "1 package flour tortillas (6 inch)",
    "1 1/2 cup shredded cheese",
  ],
  directions: [
    "Heat oven to 375°F. Spray 13x9-inch (3-quart) baking dish or pan with cooking spray.",
    "In 10-inch nonstick skillet cook beef over medium-high heat 5 to 7 minutes stirring occasionally until thoroughly cooked. Stir in 1/2 cup of the enchilada sauce and the chiles.",
    "Spread 1/2 cup of the enchilada sauce evenly in baking dish. Spread 1/4 cup beef mixture down center of each tortilla; sprinkle with 1 tablespoon cheese. Wrap tortillas tightly around filling placing seam side down in baking dish. Top with remaining enchilada sauce. Sprinkle with remaining cheese.",
    "Bake 20 to 25 minutes or until hot and bubbly. Let stand 5 minutes before serving.",
  ],
};

export const QuesadillaRecipe: RecipeState = {
  id: uuidv4(),
  url: "",
  title: "Chicken Quesadillas",
  ingredients: [
    "6 oz chicken breast strips",
    "1 cup salsa",
    "1 package flour tortillas (8 inch)",
    "2 cups shredded cheese",
    "1/4 cup sour cream",
  ],
  directions: [
    "Cut chicken into bite-size pieces. In small bowl mix chicken and salsa.",
    "Spray 1 side of 1 tortilla with cooking spray; place sprayed side down on work surface. Layer with one-fourth of the chicken mixture and 1/2 cup of the cheese. Top with another tortilla; spray top of tortilla with cooking spray.",
    "Cook in 10-inch nonstick skillet over medium heat 4 to 6 minutes carefully turning after 2 minutes until golden brown. Repeat with remaining tortillas chicken mixture and cheese. To serve cut quesadillas into wedges. Serve with sour cream and salsa.",
  ],
};
