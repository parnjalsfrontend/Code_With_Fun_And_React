import React, { Component } from "react";

class Options extends Component {
  render() {
    const { options, selectedOption, onOptionChange } = this.props;

    if (!options || options.length === 0) {
      return null; // Handle case where options array is empty or undefined
    }

    return (
      <div className="options">
        {options.map((option, index) => (
          <div key={index} className="relative block mb-2">
            <input
              type="radio"
              id={`option_${index}`}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
              className="relative block mb-2-input"
            />
            <label htmlFor={`option_${index}`} className="text-gray-700 pl-6 mb-0">
              {option}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default Options;
