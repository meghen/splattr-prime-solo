import React, {Component} from 'react';
 
class AddMovie extends Component {
    render() {
        return (
            <div className='add-movie-form'>
                <form>
                    <label>
                        Title: 
                        <br/><input/>
                    </label><br/>
                    <label>
                        Director: 
                        <br/><input/>
                    </label><br/>
                    <label>
                        Release Year: 
                        <br/><input/>
                    </label><br/>
                    <label>
                        Review/Notes:
                        <br/><textarea></textarea>
                    </label>
                </form>
            </div>
        )
    }
}
export default AddMovie;