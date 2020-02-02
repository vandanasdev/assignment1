
const element = (
    <div className="center">
        <div className="name">Vandana Singh</div>
        <img className="image" src='/images/vandanaProfilePic.png' />
        <div> I am an extended studies Student</div>
        <div className="button-div">
            <a className="button" href="https://github.com/vandanasdev/assignment1">VIEW MY GITHUB REPO</a>
        </div>
        
    </div>
);

ReactDOM.render(element, document.getElementById('myInfo'));