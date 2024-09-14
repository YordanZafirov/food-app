import Image from 'next/image';
import { notFound } from 'next/navigation';

import classes from './page.module.css';
import { getMeal } from '@/lib/meals';

const MealDetailsPage = ({ params }) => {
    const meal = getMeal(params.mealSlug);

    if (!meal) {
        notFound();
    }
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.create}>by <a href={`mailto: ${meal.creator_emal}`}>{meal.creator}</a></p>
                    <p className={classes.summart}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instruction} dangerouslySetInnerHTML={{
                    __html: meal.instructions.replace(/\n/g, '<br>')
                }}></p>
            </main>
        </>
    );
}

export default MealDetailsPage;