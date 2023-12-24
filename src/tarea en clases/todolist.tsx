interface Person {
    name: string;
    theme: {
      backgroundColor: string;
      color: string;
    };
  }


const person: Person = {
    name: 'Gregorio Y. Zara',
    theme:{
        backgroundColor: 'black',
        color: 'pink',
    },
};

export default function Todolist(){
    return(
        <div style={person.theme}>
            <h1>{person.name}&apos;s Todos</h1>
            <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara"/>
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronatics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}