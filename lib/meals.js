import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export function getMeals() {
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(mealSlug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(mealSlug);
}

export function saveMeal(meal){
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);
}