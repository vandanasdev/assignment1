
const element = (
    <div title="Outer div">
        <div>Vandana Singh</div>
        <img src={ require('./images/vandanaProfilePic.jpg') } />
        <div> I am an extended studies Student</div>
        <a href="https://github.com/vandanasdev/assignment1">VIEW MY GITHUB REPO</a>
    </div>
);

ReactDOM.render(element, document.getElementById('myInfo'));