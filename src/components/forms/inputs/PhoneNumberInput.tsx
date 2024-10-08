import React, { useState } from "react";
import {
  CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";

export interface PhoneInputProps {
  onChange: (phone: string, country: CountryIso2) => void;
  dropdownStyles?: string;
  countrySelectorStyles?: string;
  inputStyles?: string;
  defaultValues?:{
    country?: CountryIso2;
    phone?: string
  }
  id?: string;
  error?: string;
  name?: string;
}

export const PhoneNumberInput: React.FC<PhoneInputProps> = ({
  onChange,
  dropdownStyles = "",
  countrySelectorStyles = "",
  inputStyles = "",
  error,
  defaultValues,
  id,
  name
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      forceDialCode: true,
      value: defaultValues?.phone,
      defaultCountry: defaultValues?.country || "py",
      preferredCountries: ["py", "ar", "br"],
      countries: defaultCountries,
      onChange: (data) => {
        onChange(data.inputValue, data.country.iso2);
      },
    });

  const handleCountryChange = (iso2: CountryIso2) => {
    setCountry(iso2);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative flex flex-col gap-1">
      <input
        type="tel"
        id={id}
        name={name}
        value={inputValue}
        onChange={handlePhoneValueChange}
        ref={inputRef}
        placeholder="Numero de telefono"
        className={`bg-transparent outline-none p-2 pl-12 text-gray-800 p-2 placeholder-gray-500 border-b-2 dark:text-gray-300 border-gray-500 border-gray-300 outline-none bg-transparent relative ${
          error
            ? "border-red-500 focus:border-red-700"
            : "focus:border-blue-700"
        } ${inputStyles}`}
      />
      <div
        className={`absolute top-0 left-0 flex items-center h-full cursor-pointer ${countrySelectorStyles}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        style={{ padding: "0 8px" }}
      >
        <FlagImage
          iso2={country.iso2}
          style={{ width: "2rem", height: "2rem" }}
        />
      </div>
      {isDropdownOpen && (
        <div
          className={`absolute -top-72 left-0 mt-1 h-72 overflow-y-auto rounded-md bg-gray-100 dark:bg-slate-800 ${dropdownStyles}`}
        >
          {defaultCountries.map((c) => {
            const parsedCountry = parseCountry(c);
            return (
              <div
                key={parsedCountry.iso2}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700"
                onClick={() => handleCountryChange(parsedCountry.iso2)}
              >
                <FlagImage
                  iso2={parsedCountry.iso2}
                  style={{ width: "2rem", height: "2rem", marginRight: "8px" }}
                />
                <span>
                  {parsedCountry.name} (+{parsedCountry.dialCode})
                </span>
              </div>
            );
          })}
        </div>
      )}
      {error && <p className="text-red-500 text-sm h-0">{error}</p>}
    </div>
  );
};
