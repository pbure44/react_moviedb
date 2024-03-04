import css from './GenreBadge.module.css'

const GenreBadge = ({genre}) => {
    const {id, name} = genre;
    return (
        <div className={css.GenreBadge}>
            {name}
        </div>
    );
};

export {GenreBadge};