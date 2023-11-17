interface CalendarCheckIconProps {
  isChecked: boolean;
}

function CalendarCheckIcon({ isChecked }: CalendarCheckIconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="calendar-check">
        <g id="Vector">
          <path
            d="M10.8536 7.14645C11.0488 7.34171 11.0488 7.65829 10.8536 7.85355L7.85355 10.8536C7.75979 10.9473 7.63261 11 7.5 11C7.36739 11 7.24021 10.9473 7.14645 10.8536L5.64645 9.35355C5.45118 9.15829 5.45118 8.84171 5.64645 8.64645C5.84171 8.45118 6.15829 8.45118 6.35355 8.64645L7.5 9.79289L10.1464 7.14645C10.3417 6.95118 10.6583 6.95118 10.8536 7.14645Z"
            fill={isChecked ? '#3478F6' : '#6D6D6D'}
          />
          <path
            d="M3.5 0C3.77614 0 4 0.223858 4 0.5V1H12V0.5C12 0.223858 12.2239 0 12.5 0C12.7761 0 13 0.223858 13 0.5V1H14C15.1046 1 16 1.89543 16 3V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V3C0 1.89543 0.895431 1 2 1H3V0.5C3 0.223858 3.22386 0 3.5 0ZM1 4V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V4H1Z"
            fill={isChecked ? '#3478F6' : '#6D6D6D'}
          />
        </g>
      </g>
    </svg>
  );
}

export default CalendarCheckIcon;
