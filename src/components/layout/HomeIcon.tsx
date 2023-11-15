interface HomeIconProps {
  color?: 'white' | '#6D6D6D';
}

function HomeIcon({ color = '#6D6D6D' }: HomeIconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="ico_Home_Fill_#C4C4C4">
        <g id="ico_bold">
          <path
            id="Vector"
            d="M22 9.84141V22.351C22 22.6704 21.6812 23.0002 21.3522 23.0002H16.6221C16.3033 23.0002 16.0874 22.7838 16.0874 22.4644V22.3613C16.0874 19.9913 14.1542 18.1571 11.892 18.1571C9.52699 18.1571 7.69666 20.0943 7.69666 22.3613V22.4644C7.69666 22.7838 7.48072 23.0002 7.16195 23.0002H2.64781C2.32905 23.0002 2 22.6807 2 22.351V9.84141C2 8.97583 2.31877 8.22361 2.96658 7.68777L10.1748 1.64936C11.1414 0.78379 12.653 0.78379 13.7224 1.64936L20.9306 7.68777C21.6812 8.22361 22 8.97583 22 9.84141Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
}

export default HomeIcon;
