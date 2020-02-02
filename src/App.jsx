import 'css/style.css'

const element = (
    <div title="Outer div">
        <div className="name">Vandana Singh</div>
        <img className="image" src='/images/vandanaProfilePic.png' />
        <div className="intro"> I am an extended studies Student</div>
        <a className="button" href="https://github.com/vandanasdev/assignment1">VIEW MY GITHUB REPO</a>
    </div>
);

ReactDOM.render(element, document.getElementById('myInfo'));