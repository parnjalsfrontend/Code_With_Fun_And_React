import React,{Component} from "react";
import Options from './Option'

class Question extends Component {
    render() {
        const { question, selectedOption, onOptionChange, onSubmit } = this.props;

        if (!question) {
            return null; // Handle case where question is not defined
        }

        return (
            <div className="question-container">
                <h3>Question {question.id}</h3>
                <form onSubmit={onSubmit} className="options-form">
                    <Options
                        options={question.options || []}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                    />
                    <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 mt-2">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Question;