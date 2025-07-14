import { cardTitle, cardWrapper, sectionTitle } from "../utils/classnames";

const Card = ({title, children}) => (
    <div className={cardWrapper}>
        {
            title && <h2 className={cardTitle}>{title}</h2>
        }
        {
            children
        }
    </div>
);
export default Card;