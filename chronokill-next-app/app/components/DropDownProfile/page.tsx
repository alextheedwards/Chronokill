import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface DropDownProps {
    options: Option[];
    selected: Option;
    onSelectedChange: (selected: Option, useState: React.Dispatch<React.SetStateAction<any>>) => void;
    useState: React.Dispatch<React.SetStateAction<any>> 
}

const DropDownProfile: React.FC<DropDownProps> = ({ options, selected, onSelectedChange, useState }) => {
    return (
        <select
            value={selected.value}
            onChange={(e) => {
                const selectedOption = options.find(option => option.value === e.target.value);
                if (selectedOption) {
                    onSelectedChange(selectedOption, useState);
                }
            }}
        >
            {options.map((option) => {
                return (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
};

export default DropDownProfile;
