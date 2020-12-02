import React from "react";

const Form = () => {
    return(
        <form>
            <input type="text" class="todo-input" />
            <button class="todo-button" type="submit">
                <i class = "fas fa-plus-square"></i>
            </button>
        </form>
    );
}

export default Form;