import React, { Component } from 'react';

class newManga extends Component {
    render() {
        return (
            <div className="NewTodo">
                <div className="main">
                    <form onSubmit={this.props.findManga} id="todo">
                        <input type="text" className="insert" id="insert" placeholder="Search for Manga" />
                        <input onClick={this.props.findManga} type="button"  />
                    </form>
                </div>
            </div>
        );
    }
}

export default newManga;