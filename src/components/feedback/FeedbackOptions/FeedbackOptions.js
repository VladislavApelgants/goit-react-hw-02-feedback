import { v4 as uuidv4 } from 'uuid';
import s from './FeedbackOptions.module.scss';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="feedback__button-container">
      {options.map(elem => (
        <button
          key={uuidv4()}
          type="button"
          className={s.button}
          onClick={onLeaveFeedback}
          name={elem}
        >
          {elem}
        </button>
      ))}
    </div>
  );
}
