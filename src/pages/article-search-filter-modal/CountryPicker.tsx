import Chip from '@components/common/chip/Chip.tsx';
import { StyledCountryPickerWrapper } from '@pages/article-search-filter-modal/CountryPicker.styles.ts';
import { Country } from '@types';

interface CountryPickerProps {
  countries: Country[];
  setCountries: (countries: Country[]) => void;
}

function CountryPicker({ countries, setCountries }: CountryPickerProps) {
  const handleCountryClick = (country: Country) => {
    setCountries(
      countries.map((c) => {
        if (c.label === country.label) {
          return { ...c, checked: !c.checked };
        }
        return c;
      })
    );
  };

  return (
    <StyledCountryPickerWrapper>
      {countries.map((country) => (
        <Chip
          key={country.label}
          isClicked={country.checked}
          onClick={() => handleCountryClick(country)}
        >
          {country.label}
        </Chip>
      ))}
    </StyledCountryPickerWrapper>
  );
}

export default CountryPicker;
