export interface Recipe {
    id: number;
    name: string;
    author: string;
    imageUrl: string;
    instructions: Instruction[];
    tags: Tag[];
    description: string;
    cookTimeMinutes: string;
    totalTimeMinutes: string;
    ingredients: Ingredient[];
    servings: number;
  }
  
  export interface Instruction {
    id: number;
    description: string;
    temperature: string;
    position: number;
  }
  
  export interface Tag {
    id: number;
    name: string;
    type: string;
    displayName: string;
  }
  
  export interface Ingredient {
    id: number;
    name: string;
    quantity: number;
    unit: string;
    displayName: string;
  }